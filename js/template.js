window.renderCharacters = (function() {

  // Set a single property on the provided element
  function setProp(name, value, el) {
    if (name === 'className') {
      el.className = value;
    } else {
      el.setAttribute(name, value);
    }
    // return el
  }

  // Set many props on a given element
  function setProps(el, props) {
    Object.keys(props).forEach(name => setProp(name, props[name], el));
    // return Object.keys(props).reduce((el, key) => setProp(name, props[name], el), element)
  }

  // Make an Element
  function makeElement(tag, props, children) {
    if (arguments.length === 1) {
      return document.createTextNode(tag);
    }

    let el = document.createElement(tag);

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

  function table(obj, formatter) {
    const form = formatter || (a => a);

    return makeElement('TABLE', { className: 'table' }, [
      makeElement('THEAD', {}, [
        makeElement('TR', {},
          Object.keys(obj).map(key => makeElement('TH', {}, [makeElement(key)]))
        )
      ]),
      makeElement('TBODY', {} ,[
        makeElement('TR', {},
          Object.values(obj).map(val => makeElement('TD', {}, [makeElement(form(val))]))
        )
      ])
    ]);
  }

  function arrTable(arr) {
    return makeElement('TABLE', { className: 'table' }, [
      makeElement('THEAD', {}, [
        makeElement('TR', {},
          arr.map(a => makeElement('TH', {}, [makeElement(a[0])]))
        )
      ]),
      makeElement('TBODY', {} ,[
        makeElement('TR', {},
          arr.map(a => makeElement('TD', {}, [makeElement(a[1])]))
        )
      ])
    ]);
  }

  // Character Article
  function characterPod(character) {
    const { armor, weapons, name, hitDie, specialAbilities , savingThrows, hitRollTable} = character;

    return makeElement('ARTICLE', {'className':'class-wrapper'}, [
      header([
        heading([makeElement(name)])
      ]),
      p([makeElement(specialAbilities.description)]),
      p([makeElement(`A ${name} starts with ${hitDie} + Constitution modifier hit points and gains 1d${hitDie}  + Constitution modifier each level thereafter`)]),
      p([makeElement(armor.description)]),
      p([makeElement(weapons.description)]),
      table(savingThrows),
      arrTable(hitRollTable)
    ]);
  }

  // Object -> Element
  return function renderCharacters(json) {
    const { scores, characters } = json.data;

    document.body.appendChild(
      makeElement('DIV', { className: 'character-tray' }, [
        makeElement('DIV', { className: 'child-div' }, [
          table(scores, arr => `${arr[0]} (${arr[1]})`)
        ]),
        makeElement('DIV', {'className':'characters-wrapper'},
          characters.map(character => characterPod(character))
        )
      ])
    )
  }

}());
