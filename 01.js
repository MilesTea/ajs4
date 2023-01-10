const characterTypes = {
    Bowman: {attack: 25, defence: 25},
    Swordsman: {attack: 40, defence: 10},
    Magician: {attack: 10, defence: 40},
    Undead: {attack: 25, defence: 25},
    Zombie: {attack: 40, defence: 10},
    Daemon: {attack: 10, defence: 40},
}

class Character {
    constructor(name, type) {
        if(name.length < 2 || name.length > 10) {
            throw new Error('Недопустимое имя')
        }
        if(!(type in characterTypes)) {
            throw new Error('Недопустимый тип')
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = characterTypes[type].attack
        this.defence = characterTypes[type].defence
    }
  
    levelUp() {
        if(this.health === 0) {
            throw new Error('Персонаж мертв')
        }
        this.level++;
        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round((100 - this.defence) * 0.2) + this.defence
        this.health = 100
    }
    damage(points) {
        let damage = Math.round(points * (1 - this.defence / 100))
        this.health -= damage
        if(this.health < 0) {this.health = 0}
    } 
  
  }

class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman')
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman')
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician')
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead')
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie')
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon')
    }
}
