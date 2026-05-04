import path from "path";
import formatLog from "./utils.js";
import fs from 'fs';
const __dirname = import.meta.dirname;


async function saveLog() {
  try {

    const folder = path.join(__dirname, 'logs');
    const filename = "system.log";
    const filepath = path.join(folder, filename)
    if (fs.existsSync(filepath)) {
      console.log("Log já existe!");
    } else {
      fs.mkdir(folder, { recursive: true }, () => { console.log('Pasta logs criada') });
      fs.writeFile(filepath, formatLog("Log criado!"), "utf8", () => { console.log("Teste") });
    }
  } catch (error) {
    console.error('Erro na operação:', error);
  }

}


saveLog();