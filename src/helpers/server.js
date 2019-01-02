export default {
  server: 'https://becmi-api.herokuapp.com/api/',
  getHeaders() {
    let headers = new Headers();

    headers.append('Accept', 'application/json');

    return headers;
  },
  serialize(obj) {
    const str = Object.keys(obj).reduce(
      (acc, key) => acc += `${key}=${obj[key]}&`, ''
    );

    return str.substring(0, str.length - 1)
  },
  handleResponse(response) {
    if (response.status !== 200) {
      // throw past then?
    }
    return response.json();
  }
};
