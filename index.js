#!/usr/bin/env node
import { program } from "commander";
import { response } from "./services/RouteService.js";
import { writeData } from "./services/WriteDataService.js";
import { isJsonFormat } from "./utils/CheckJsonFormat.js";
import chalk from "chalk";

program
  .version("1.0.0")
  .description("Node CLI")
  .option("-n, --url <type>", "Add your required url")
  .action((options) => {
    if (typeof options.url !== "undefined") {
      // add is Empty condition
      client(options.url);
    }
  });

program.parse(process.argv);

async function client(url) {
  //1. send the request and get the response
  if (url === "") console.log(chalk.red("empty url!"));
  else {
    let res = await response(url);
    if (res === null) return;
    //2. check if it json format
    let booleanResult = isJsonFormat(JSON.stringify(res));

    //3. append it to our file
    if (!booleanResult)
      console.log(chalk.red("the response is not json formatted!"));
    else writeData(res);
  }
}
