// this service take the returned json response and log it in a json file
import { appended } from "../utils/FileUtil.js";
import "dotenv/config.js";
import chalk from "chalk";

const filePath = process.env.FILE_PATH || "./output.json";
export async function writeData(data) {
  console.log(chalk.green(await appended(filePath, JSON.stringify(data))));
}
