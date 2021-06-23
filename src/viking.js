// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    // 1st: a random viking (the one doing the damage)
    const randomNumberV = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomNumberV];
    // 2ndd: a random saxon (the one receiving the damage)
    const randomNumberS = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomNumberS];

    const receiveDamageReturn = randomSaxon.receiveDamage(
      randomViking.strength
    );
    if (randomSaxon.health <= 0) {
      // its dead lets remove it
      this.saxonArmy.pop(randomSaxon);
    }
    return receiveDamageReturn;
  }

  saxonAttack() {
    // 1st: a random viking (the one doing the damage)
    const randomNumberV = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomNumberV];
    // 2ndd: a random saxon (the one receiving the damage)
    const randomNumberS = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomNumberS];

    const receiveDamageReturn = randomViking.receiveDamage(
      randomSaxon.strength
    );
    if (randomViking.health <= 0) {
      // its dead lets remove it
      this.vikingArmy.pop(randomViking);
    }
    return receiveDamageReturn;
  }

  showStatus() {
    // 1: if the saxon array is empty, return "Vikings have won the war of the century!"
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    }
    // 2: if the viking array is empty, return "Saxons have fought for their lives and survived another day..."
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    //3: if there is at least one viking and one saxon, return "Vikings and Saxons are still in the thick of battle."
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
