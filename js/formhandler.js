(function() {
  const server = 'http://127.0.0.1:3000/api/';
  let headers = new Headers();
  const classResult = document.getElementById('class-result');
  const inventoryResult = document.getElementById('inventory-result');

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

  function attachToDom(el, template, json) {
    if (el.childNodes.length) {
      el.removeChild(el.childNodes[0])
    }

    el.appendChild(template(json));
  }

  /**
   * Fetch score modifiers and classes from server
   * @param  {Object} event
   * @return {undefined}
   */
  function handleSubmit(event) {
    event.preventDefault();

    fetch([server, 'scores', getQueryString(event.target)].join(''), { method: 'GET', headers: headers })
      .then(handleResponse)
      .then(attachToDom.bind(null, classResult, renderCharacters))
      .then(scroll(0, classResult.getBoundingClientRect().y - 10) );
  }

  // Add event listener
  document.getElementById('score-form').addEventListener('submit', handleSubmit);

  function clickHandler(event) {
    if (event.target.classList.contains('selector')) {
      event.preventDefault();

      fetch([server, 'equipment', '?name=', event.target.dataset.className].join(''), { method: 'GET', headers: headers })
        .then(handleResponse)
        .then(attachToDom.bind(null, inventoryResult, renderInventory))
        .then(scroll(0, inventoryResult.offsetTop + window.innerHeight - 10) );
    }
  }

  document.addEventListener('click', clickHandler);

}());
