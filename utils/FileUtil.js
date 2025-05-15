import fs from "fs/promises";
import chalk from "chalk";

export let appended = async (path, data) => {
  try {
    await fs.appendFile(path, data);
    return "data added";
  } catch (error) {
    console.log(chalk.red(error));
    return null;
  }
};
