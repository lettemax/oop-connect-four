export default class Game {
    constructor(name1, name2) {
        this.name1 = name1
        this.name2 = name2
        this.currentPlayer = 1;
        this.columns = [];
        for (let i = 0; i<6; i++){
            const col = new Column()
            this.columns.push(col);
        }
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`
    }
    //Player 1 Name vs. Player 2 Name"
    playInColumn(index) {
        let col = this.columns[index]
        col.add(this.currentPlayer)
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
    getTokenAt(rIndex, cIndex){
        let col = this.columns[cIndex];
        return col.getTokenAt(rIndex);
    }
    isColumnFull(cIndex){
        let colElement = document.getElementById(`column-${cIndex}`)
        let col = this.columns[cIndex]
        if(col.isColumnFull()){
            colElement.classList.add('full')
        }else{
            colElement.classList.remove('full')
            
        }
    }
}