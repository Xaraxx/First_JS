const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Game{
    constructor(){
        this.start()
        this.generateSecuence()
        this.nextLevel()
    }
    start(){
        this.chooseColor = this.chooseColor.bind(this)
        btnEmpezar.classList.add('hide')
        this.level = 1
        this.colors = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generateSecuence(){
        this.secuence = new Array(10).fill(0).map( n => Math.floor(Math.random() * 4 ))
    }

    nextLevel(){
        this.illuminateSecuence()
        this.addClick()
    }

    changeNumberToColor(number){
        switch (number){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    illuminateSecuence(){
        for (let i = 0; i < this.level; i++){
            const color = this.changeNumberToColor(this.secuence[i])
            setTimeout(() => this.illuminateColor(color), 1000 * i)
        }
    }

    illuminateColor(color){
        this.colors[color].classList.add('light')
        setTimeout(() => this.offColor(color), 350)
    }

    offColor(color) {
        this.colors[color].classList.remove('light')
    }

    addClick(){
        this.colors.celeste.addEventListener('click', this.chooseColor)
        this.colors.violeta.addEventListener('click', this.chooseColor)
        this.colors.naranja.addEventListener('click', this.chooseColor)
        this.colors.verde.addEventListener('click', this.chooseColor)
    }

    chooseColor(ev){
        const colorName = ev.target.dataset.color
    }
}

function startGame(){
    window.game = new Game()
}
