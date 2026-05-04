import path from "path";
import readline from "readline";
import fs from 'fs';
import { displayMemory } from "./utils.js";
const __dirname = import.meta.dirname;

export default function processWithStream() {
  const logsFolder = path.join(__dirname, 'logs');
  const inputPath = path.join(logsFolder, "aula03.log");
  const outputPath = path.join(logsFolder, "aula03_extraido.log");
  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity
  });

  console.log("Iniciando Processamento com Stream! ...");

  const monitorInterval = setInterval(displayMemory, 500);
  let errorCount = 0;

  rl.on('line', (line) => {
    if (line.includes('ERROR')) {
      errorCount += 1;
      const canWrite = writeStream.write(`${line}\n`);

      if (!canWrite) {
        rl.pause();
      }
    }
  })

  writeStream.on('drain', () => {
    rl.resume();
  });

  rl.on('close', () => {
    clearInterval(monitorInterval);
    writeStream.end();
    console.log('---');
    console.log('Processamento concluído!\n')
    console.log(`Quantidade de erros encontrados: ${errorCount} linhas`);
    displayMemory('Fim (após escrita)');
  });

  readStream.on('error', (err) => console.error("Error de leitura:", err.message));
  writeStream.on('error', (err) => console.error("Error de escrita:", err.message));
}