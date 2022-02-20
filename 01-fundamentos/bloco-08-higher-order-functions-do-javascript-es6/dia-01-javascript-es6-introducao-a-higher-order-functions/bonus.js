const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const strength = dragon.strength;
  const damage = parseInt((Math.random() * ((strength + 1) - 15)) + 15, 10);
  return damage;
};

const warriorDamage = (warrior) => {
  const strength = warrior.strength;
  const weaponDmg = warrior.weaponDmg;
  const maxDamage = strength * weaponDmg;
  const damage = parseInt((Math.random() * ((maxDamage + 1) - strength)) + strength, 10);
  return damage;
};

const mageManaAndDamage = (mage) => {
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  let damage = parseInt((Math.random() * ((maxDamage + 1) - minDamage)) + minDamage, 10);
  let mana = 15;
  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
    mana = 0;
  }
  return { damage, mana }
};

const gameActions = {
  warriorTurn: (callback) => {
    const damage = callback(warrior);
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (callback) => {
    const damage = callback(mage);
    mage.damage = damage.damage;
    mage.mana -= damage.mana;
    dragon.healthPoints -= damage.damage;
  },
  dragonTurn: (callback) => {
    const damage = callback(dragon);
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    dragon.damage = damage;
  },
  resultTurn: () => battleMembers
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageManaAndDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.resultTurn());