import path from "path";
import formatLog from "./utils.js";
import fs from 'fs';
const __dirname = import.meta.dirname;




async function saveLog() {
  try {

    const folder = path.join(__dirname, 'logs');
    const filename = "system.log";
    if (fs.existsSync(path.join(folder, filename))) {
      console.log("Log já existe!");
    } else {
      await fs.mkdir(folder, { recursive: true });
      await fs.writeFile(folder, formatLog("Log criado!"), "utf8");
    }
  } catch (error) {
    console.error('Erro na operação:', error);
  }

}


saveLog();