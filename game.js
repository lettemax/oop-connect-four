export default class Game{
    constructor(name1, name2){
        this.name1 = name1
        this.name2 = name2
    }

    getName(){
        return `${this.name1} vs. ${this.name2}`
    }
    //Player 1 Name vs. Player 2 Name"
}