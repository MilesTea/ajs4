import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('test test', () => { const a = 5; expect(a).toEqual(5); });

test.each([
  [1, true],
  [2, false],
  [10, false],
  [11, true],
])('testing Character constructor on name validation with %i symbol(s)', (symbols, error) => {
  function testFunction() { new Character('a'.repeat(symbols), 'TestType'); }
  if (error) {
    expect(testFunction).toThrow(Error);
  } else {
    expect(testFunction).not.toThrow(Error);
  }
});

test.each([
  [0, true],
  [1, false],
  [100, false],
])('testing Character constructor on attack validation with %i attack', (attack, error) => {
  function testFunction() { new Character('test', 'TestType', attack, 10); }
  if (error) {
    expect(testFunction).toThrow(Error);
  } else {
    expect(testFunction).not.toThrow(Error);
  }
});

test.each([
  [-5, true],
  [0, false],
  [99, false],
  [100, true],
])('testing Character constructor on defence validation with %i defence', (defence, error) => {
  function testFunction() { new Character('test', 'TestType', 10, defence); }
  if (error) {
    expect(testFunction).toThrow(Error);
  } else {
    expect(testFunction).not.toThrow(Error);
  }
});

test.each([
  [25, false],
  [0, true],
  [-5, true],
])('testing levelUp function with %i hp', (hp, error) => {
  const testCharacter = new Character('test', 'Swordsman');
  testCharacter.health = hp;
  function testFunction() { testCharacter.levelUp(); }
  if (error) {
    expect(testFunction).toThrow(Error);
  } else {
    expect(testFunction).not.toThrow(Error);
  }
});

test.each([
  [20, 40],
  [100, 0],
  [120, 0],
])('testing damage function with 50 hp and %i damage', (damage, hpExpected) => {
  const testCharacter = new Character('test', 'Swordsman');
  testCharacter.health = 50;
  testCharacter.defence = 50;
  testCharacter.damage(damage);
  expect(testCharacter.health).toEqual(hpExpected);
});

test.each([
  [Bowman],
  [Swordsman],
  [Magician],
  [Undead],
  [Zombie],
  [Daemon],
])('testing character creation with %p class', (TestClass) => {
  expect(new TestClass('test')).toBeInstanceOf(Character);
});
