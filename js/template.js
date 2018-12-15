window.renderCharaters = (function() {
  /**
   * Set a single property on the provided element. Use this method in loops
   * or to spawn other methods like:
   * var setHref = setProp.bind(null, 'href');
   * var addMyClass = setProp.bind(null, 'class', 'my-class');
   * @param {string} name  property name
   * @param {string} value property value
   * @param {Element} el   element to apply property to
   */
  function setProp(name, value, el) {
    if (name === 'className') {
      el.className = value;
    } else {
      el.setAttribute(name, value);
    }
    // return el
  }

  /**
   * Set many props on a given element
   * @param {Element} el
   * @param {object} props flat object of key value pairs to set on provided element
   */
  function setProps(el, props) {
    Object.keys(props).forEach(name => setProp(name, props[name], el));
    // return Object.keys(props).reduce((el, key) => setProp(name, props[name], el), element)
  }

  // String -> Object -> Array -> Element
  function makeElement(tag, props, children) {
    if (arguments.length === 1) {
      return document.createTextNode(tag);
    }

    let el = document.createElement(el);

    setProps(el, props);
    // el = setProps(doc.createElement, props);
    // children.reduce((el, child) => el.appendChild(child), el)

    // Feels like children could or should be "lazy" so that each child is invoked here
    // instead of being invoked before here (ex: el.appendChild(child()))
    children.forEach(child => el.appendChild(child));

    return el;
  }

  const header = makeElement.bind(null, 'HEADER', {});
  const heading = makeElement.bind(null, 'H1', {});
  const p = makeElement.bind(null, 'P', {});
  // const dl = (w, a) => makeElement(...)
  // const table = ...

  // makeElement('ARTICLE', {'className':'class-wrapper'}, [
  //     makeElement('HEADER', {}, [
  //         makeElement('H1', {}, [makeElement(Magic-User]))
  //     ]);
  // ]);
  //
  // makeElement('DIV', {className: 'character-tray', [
  //   makeElement('ARTICLE', {'className':'class-wrapper'}, [
  //     header([heading([Magic-User])),
  //     p([Desc]),
  //     p(HP),
  //     dl(Weapons, Armor),
  //     table(Saves),
  //     table(Hit)
  //   ]);
  // ]})

  // Object -> Element
  return function renderCharacters(characters) {
    console.log(characters);
    // return makeElement('DIV', {className: 'character-tray', [
    //   makeElement('ARTICLE', {'className':'class-wrapper'}, [
    //     // characters.map(character -> makeBlock(character))
    //     header([heading([Magic-User])),
    //     p([Desc]),
    //     p(HP),
    //     dl(Weapons, Armor),
    //     table(Saves),
    //     table(Hit)
    //   ]);
    // ]});
  }

}());


/*
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
*/
