function parseUrlQuery(url) {
  let result = {};
  let query = url.split("?");
  let params = query[1].split("&");
  
  for (let param of params) {
    let pair = param.split("=");
    let key = pair[0];
    let value = pair[1];

    result[key] = value;
  }
  return result;
}