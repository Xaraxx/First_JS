const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Game{
    constructor(){
        this.start()
        this.generateSecuence()
    }
    start(){
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
}

function startGame(){
    window.game = new Game()
}
