const server = 'https://becmi-api.herokuapp.com/api/';

function handleResponse(response) {
  if (response.status !== 200) {
    // throw past then?
  }
  return response.json();
}

function getHeaders() {
  let headers = new Headers();

  headers.append('Accept', 'application/json');

  return headers;
}

function serialize(obj) {
  const str = Object.keys(obj).reduce(
    (acc, key) => acc += `${key}=${obj[key]}&`, ''
  );

  return str.substring(0, str.length - 1);
}

function get(path) {
  return fetch(
    `${server}${path}`,
    { method: 'GET', headers: getHeaders() }
  )
  .then(handleResponse);
}

export default {
  serialize,
  get,
  getEquipment: query => get(`equipment/?${serialize(query)}`),
  getScores: query => get(`scores?${serialize(query)}`)
};
