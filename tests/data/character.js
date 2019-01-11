export default {
  'name': 'Magic-User',
  'description': '',
  'savingThrows': {
    'deathRayOrPoison': 13,
    'magicWand': 14,
    'paralysisOrTurnToStone': 13,
    'dragonBreath': 16,
    'rodsStavesOrSpells': 15
  },
  'title': 'Medium',
  'xpForNextLevel': 2500,
  'prime': [
    'Intelligence'
  ],
  'hitDie': 4,
  'armor': {
    'description': 'A magic-user may not wear any kind of armor, and may not use a shield.',
    'ids': [-1]
  },
  'weapons': {
    'description': 'A magic-user can only use a dagger for a weapon.',
    'ids': [5, 6]
  },
  'specialAbilities': {
    'description': 'A magic-user can cast magic spells. First level magic-users start with Read Magic and either Magic Missle or Sleep.',
    'abilities': []
  },
  'hitRollTable': [
    [9, 10],
    [8, 11],
    [7, 12],
    [6, 13],
    [5, 14],
    [4, 15],
    [3, 16],
    [2, 17],
    [1, 18],
    [0, 19],
    [-1, 20]
  ],
  'xpAdjustMent': 5
}
