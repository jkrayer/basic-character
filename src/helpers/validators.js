function isValidScoreObject(obj) {
  console.log('v2', obj)
  return [
    [ 'Strength',
      'Intelligence',
      'Wisdom',
      'Dexterity',
      'Constitution',
      'Charisma'
    ].reduce((acc, key) => obj[key] !== undefined && acc, true),
    Object.values(obj).every(x => /^[3-9]|1[0-8]/.test(x))
  ].every(x => x === true)
}

export default {
  isValidScoreObject
};
