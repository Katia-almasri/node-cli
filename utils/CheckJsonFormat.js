// this function is to check if a given data is a json format

export let isJsonFormat = (data) => {
  try {
    JSON.parse(data);
    return true;
  } catch (e) {
    return false;
  }
};
