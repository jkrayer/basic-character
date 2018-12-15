(function() {
  const server = 'http://127.0.0.1:3000/api/scores';
  let headers = new Headers();

  headers.append('Accept', 'application/json');

  // Element -> String
  function getQueryString(form) {
    return Array.prototype.reduce.call(form.elements, function(acc, el, key) {
      return el.nodeName === 'INPUT' ? [acc, (key === 0 ? '?' : '&'), el.name, '=', el.value].join('') : acc;
    }, '');
  }

  function handleResponse(response) {
    if (response.status !== 200) {
      // throw past then?
    }
    return response.json();
  }

  /**
   * Fetch score modifiers and classes from server
   * @param  {Object} event
   * @return {undefined}
   */
  function handleSubmit(event) {
    event.preventDefault();

    fetch([server, getQueryString(event.target)].join(''), { method: 'GET', headers: headers })
      .then(handleResponse)
      .then(renderCharacters);
  }

  // Add event listener
  document.getElementById('score-form').addEventListener('submit', handleSubmit);

}());
