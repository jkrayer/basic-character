import valid from '@/helpers/validators';

describe('valid.isValidScoreObject', () => {
  test('validates numeric strings and numbers', () => {
    expect(valid.isValidScoreObject({
      'Strength': 12,
      'Intelligence': 9,
      'Wisdom': 13,
      'Dexterity': 6,
      'Constitution': 3,
      'Charisma': 11
    })).toStrictEqual(true);

    expect(valid.isValidScoreObject({
      'Strength': '12',
      'Intelligence': '9',
      'Wisdom': '13',
      'Dexterity': '6',
      'Constitution': '3',
      'Charisma': '11'
    })).toStrictEqual(true);
  });

  test('invalidates numbers below three and above 18', () => {
    expect(valid.isValidScoreObject({
      'Strength': 2,
      'Intelligence': 9,
      'Wisdom': 13,
      'Dexterity': 6,
      'Constitution': 3,
      'Charisma': 11
    })).toStrictEqual(false);

    expect(valid.isValidScoreObject({
      'Strength': '12',
      'Intelligence': '19',
      'Wisdom': '13',
      'Dexterity': '6',
      'Constitution': '3',
      'Charisma': '11'
    })).toStrictEqual(false);
  });

  test('invalidates objects with incorrect keys', () => {
    expect(valid.isValidScoreObject({
      'Strength': 2,
      'Intelligence': 9,
      'Wisdom': 13,
      'Dexterity': 6,
      'Constitution': 3,
      'Charisma': 11,
      'Comliness': 13
    })).toStrictEqual(false);

    expect(valid.isValidScoreObject({
      'Strength': '12',
      'Intelligence': '19',
      'Wisdom': '13',
      'Dexterity': '6'
    })).toStrictEqual(false);
  });

  test('invalidates objects non-numeric values', () => {
    expect(valid.isValidScoreObject({
      'Strength': 2,
      'Intelligence': 9,
      'Wisdom': null,
      'Dexterity': 6,
      'Constitution': 3,
      'Charisma': 11,
      'Comliness': 13
    })).toStrictEqual(false);

    expect(valid.isValidScoreObject({
      'Strength': '12',
      'Intelligence': '19',
      'Wisdom': ['13'],
      'Dexterity': '6',
      'Constitution': '3',
      'Charisma': '11'
    })).toStrictEqual(false);
  });
});
