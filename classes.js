class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }

}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 12;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Mage extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 20;
        this.defense = 20;
        this.maxLife = this.life;

    }
}

class Monstrinho extends Character {
    constructor() {
        super("😒 Léia");
        this.life = 110;
        this.attack = 8;
        this.defense = 8;
        this.maxLife = this.life;


    }
}

class Monstrao extends Character {
    constructor() {
        super("Monstrão");
        this.life = 120;
        this.attack = 16;
        this.defense = 4;
        this.maxLife = this.life;


    }


}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;

    }


    start() {
        this.update();

        this.fighter1El.querySelector(".attackButton").addEventListener("click", () => {
            this.doAttack(this.fighter1, this.fighter2)
        })
        this.fighter2El.querySelector(".attackButton").addEventListener("click", () => {
            this.doAttack(this.fighter2, this.fighter1)


        })
    }

    update() {
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} -  ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} -  ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;

    }


    doAttack(atacante, atacado) {
        if (atacante.life == 0) {


            return this.log.addMessage(`☠ ${atacante.name} morreu`);
        }else if(atacado.life == 0){
            return this.log.addMessage(`☠ ${atacado.name} morreu`);
        }  


        let factor1 = (Math.random() * 2).toFixed(2);
        let factor2 = (Math.random() * 2).toFixed(2);

        let actualAttack = atacante.attack * factor1;
        let actualDefense = atacado.defense * factor2;

        if (actualAttack > actualDefense) {
            atacado.life -= actualAttack;



            this.log.addMessage(`${atacante.name} causou ${actualAttack.toFixed(1)} de dano ao ${atacado.name}`);
        } else {
            this.log.addMessage(`${atacado.name} conseguiu defender `);


        }

        this.update();
    }
}

class Log{
    list = [];

    constructor(listEl){
        this.listEl = listEl
    }

    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = "";

        for(let i in this.list){
            this.listEl.innerHTML += `<li style="list-style-type: none;"  tabindex="0">${this.list[i]} </li>`;
        }
        let lastChild = this.listEl.lastElementChild;
        lastChild.focus();
    }

}
