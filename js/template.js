window.renderCharacters = (function() {

  const numToString = num => num > 0 ? ['+', num].join('') : num;

  const camelToBook = string => string.replace(/[A-Z]/g, match => ' ' + match);

  function mapKeys(transformer, obj) {
    return Object.keys(obj).reduce((acc, key) => (acc[transformer(key)] = obj[key], acc), {});
  }


  function parseScores(scores) {
    return scores.map(score => score.map((v, i) => i === 2 ? numToString(v) : v))
  }

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
  const heading = makeElement.bind(null, 'H1', { className: 'f2 serif lh-title mh2 mv2' });
  const p = makeElement.bind(null, 'P', { className: 'mh2 mv2 f5 lh-copy sans-serif' });

  function table(obj, formatter) {
    const form = formatter || (a => a);

    return makeElement('TABLE', { className: 'collapse ba br2 b--black-10 pv2 ph3 mh2 mv2' }, [
      makeElement('THEAD', {}, [
        makeElement('TR', { className: 'striped--light-gray' },
          Object.keys(obj).map(key => makeElement('TH', { className: 'pv2 ph3 f6 fw6 ttu'}, [makeElement(key)]))
        )
      ]),
      makeElement('TBODY', {} ,[
        makeElement('TR', {},
          Object.values(obj).map(val => makeElement('TD', { className: 'pv2 ph3 tc f6 br b--light-gray'}, [makeElement(form(val))]))
        )
      ])
    ]);
  }

  function arrTable(arr) {
    return makeElement('TABLE', { className: 'collapse ba br2 b--black-10 pv2 ph3 mh2 mv2' }, [
      makeElement('THEAD', {}, [
        makeElement('TR', { className: 'striped--light-gray' },
          arr.map(a => makeElement('TH', { className: 'pv2 ph3 f6 fw6 ttu' }, [makeElement(a[0])]))
        )
      ]),
      makeElement('TBODY', {} ,[
        makeElement('TR', {},
          arr.map(a => makeElement('TD', { className: 'pv2 ph3 tc f6 br b--light-gray' }, [makeElement(a[1])]))
        )
      ])
    ]);
  }

  function vtable(obj) {
    const { head, body } = obj;

    return makeElement('TABLE', { className: 'collapse ba br2 b--black-10 pv2 ph3 mh2 mv2' }, [
      makeElement('THEAD', {},
        head.map(arr => makeElement('TR', {},
          arr.map(a => makeElement('TH', { className: 'pv2 ph3 f6 fw6 ttu br b--moon-gray'}, [makeElement(a)]))
        ))
      ),
      makeElement('TBODY', {},
        body.map((arr, index) => makeElement('TR', { className: index % 2 === 0 ? 'striped--light-gray' : '' },
          arr.map((a, i) => {
            const tag = i === 0 ? 'TH' : 'TD';
            let className = 'pv2 ph3 f6 br b--moon-gray';
            className += i === 0 ? ' tr' : i === 2 ? ' tl' : ' tc';

            return makeElement(tag, { className }, [makeElement(a)])
          })
        ))
      )
    ]);
  }

  // Character Article
  function characterPod(character) {
    const { armor, weapons, name, hitDie, specialAbilities , savingThrows, hitRollTable} = character;

    return makeElement('ARTICLE', {'className':'mv4'}, [
      header([
        heading([makeElement(name)])
      ]),
      p([makeElement(specialAbilities.description)]),
      p([makeElement(`A ${name} starts with ${hitDie} + Constitution modifier hit points and gains 1d${hitDie}  + Constitution modifier each level thereafter`)]),
      p([makeElement(armor.description)]),
      p([makeElement(weapons.description)]),
      makeElement('H2', { className: 'f3 serif lh-title mh2 mv2' }, [makeElement('Saving Throws')]),
      table(mapKeys(camelToBook, savingThrows)),
      makeElement('H2', { className: 'f3 serif lh-title mh2 mv2' }, [makeElement('Hit Table')]),
      arrTable(hitRollTable)
    ]);
  }

  // Object -> Element
  return function renderCharacters(json) {
    const { scores, characters } = json.data;

    return makeElement('DIV', { className: 'character-tray' }, [
        makeElement('DIV', { className: 'child-div' }, [
          vtable({ head: [['', 'Score', 'Modifier']], body: parseScores(scores) })
        ]),
        makeElement('DIV', {'className':'characters-wrapper'},
          characters.map(character => characterPod(character))
        )
      ])
  }

}());
