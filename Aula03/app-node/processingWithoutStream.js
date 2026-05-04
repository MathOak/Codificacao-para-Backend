import path from "path";
import fs from 'fs';
import { displayMemory } from "./utils.js";
const __dirname = import.meta.dirname;

export default function processWithoutStream() {
  const logsFolder = path.join(__dirname, 'logs');
  const inputPath = path.join(logsFolder, "aula03.log");
  const outputPath = path.join(logsFolder, "aula03_extraido.log");

  console.log("Iniciando Processamento Síncrono...");
  displayMemory("Início");

  try {
    // Lê tudo para a memória
    const data = fs.readFileSync(inputPath, 'utf-8');
    displayMemory("Após ler arquivo");

    const lines = data.split('\n');
    const errorLines = lines.filter(line => line.includes('ERROR'));

    fs.writeFileSync(outputPath, errorLines.join('\n'));
    displayMemory("Fim (após escrita)");

    console.log('---');
    console.log(`Erros encontrados: ${errorLines.length}`);

  } catch (err) {
    console.error("Erro:", err.message);
  }
}