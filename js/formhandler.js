(function() {
  const server = 'http://127.0.0.1:3000/api/scores';
  let headers = new Headers();
  headers.append('Accept', 'application/json');

  function showScores(obj) {
    let parent = document.createElement('DIV');

    ['Strength', 'Intelligence', 'Wisdom', 'Constitution', 'Dexterity', 'Charisma'].forEach(
      key => {
        let d = document.createElement('DIV');
        d.innerText = [key, obj[key][0], (obj[key][1] > 0 ? '+' + obj[key][1] : obj[key][1])].join(' ');
        parent.appendChild(d);
      }
    )

    document.body.appendChild(parent);
  }

  function titleCase(string) {
    return string[0].toUpperCase() + string.replace(/[A-Z]/g, a => ' ' + a).slice(1);
  }

  function makeTable(arr) {
    let table = document.createElement('TABLE');
    let thead = document.createElement('THEAD');
    let thRow = document.createElement('TR');
    let tbody = document.createElement('TBODY');
    let tbRow = document.createElement('TR');

    thead.appendChild(thRow);
    tbody.appendChild(tbRow);
    table.appendChild(thead);
    table.appendChild(tbody);

    let header = table.tHead.childNodes[0];
    let body = table.tBodies[0].childNodes[0];

    Object.keys(arr).forEach(function(col) {
      let th = document.createElement('TH');
      let td = document.createElement('TD');

      th.innerText = Array.isArray(arr) ? arr[col][0] : titleCase(col);
      td.innerText = Array.isArray(arr) ? arr[col][1] : arr[col];

      header.appendChild(th);
      body.appendChild(td);
    });

    return table;
  }

  function showClasses(arr) {
    let parent = document.createElement('DIV');

    arr.forEach(function(character) {
      let wrapper = document.createElement('DIV');
      let title = document.createElement('H1');
      let hd = document.createElement('DIV');
      let weaponProf = document.createElement('DIV');
      let armorProf = document.createElement('DIV');
      let xp = document.createElement('DIV');
      let hitRolls = makeTable(character.hitRollTable);
      let savingThrows = makeTable(character.savingThrows);
      let specialAbilities = document.createElement('DIV');

      title.innerText = character.name,
      hd.innerText = ['Hit Die:', character.hitDie, '; HP at first level:', character.hitDie, '+ Constitution modifier'].join(' '),
      weaponProf.innerText = character.weapons.description,
      armorProf.innerText = character.armor.description,
      xp.innerText = ['XP For Next Level: ', character.xpForNextLevel, '; XP Adjustment: ', character.xpAdjustMent, '%'].join(''),
      specialAbilities.innerText = character.specialAbilities.description;

      [title, hd, weaponProf, armorProf, xp, hitRolls, savingThrows, specialAbilities].forEach(el => wrapper.appendChild(el));

      parent.appendChild(wrapper);
    });

    document.body.appendChild(parent);
  }

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

  function handleJson(json) {
    showScores(json.data.scores)
    showClasses(json.data.characters)
  }

  /**
   * Fetch score modifiers and classes from server
   * @param  {Object} event
   * @return {undefined}
   */
  function handleSubmit(event) {
    event.preventDefault();

    fetch(
      [server, getQueryString(event.target)].join(''),
      {
        method: 'GET',
        headers: headers
      }
    )
    .then(handleResponse)
    .then(handleJson)
  }

  // Add event listener
  document.getElementById('score-form').addEventListener('submit', handleSubmit);

}());
