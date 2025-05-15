// this service is to send get requests

import chalk from "chalk";

export let response = async (url) => {
  try {
    let data = await fetch(url);
    if (!data.ok) throw new Error("error in fetching data from the url!");
    return await data.json();
  } catch (error) {
    console.log(chalk.red("invalid url!"));
    return null;
  }
};
