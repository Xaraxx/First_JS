const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const LAST_LEVEL = 10

class Game{
    constructor(){
        this.start()
        this.generateSecuence()
        setTimeout(this.nextLevel, 500)
    }

    start(){
        this.chooseColor = this.chooseColor.bind(this)
        this.nextLevel = this.nextLevel.bind(this)
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
        this.secuence = new Array(LAST_LEVEL).fill(0).map( n => Math.floor(Math.random() * 4 ))
    }

    nextLevel(){
        this.subLevel = 0   
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
    
    changeColorToNumber(color){
        switch (color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3 
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

    eliminateClick(){
        this.colors.celeste.removeEventListener('click', this.chooseColor)
        this.colors.violeta.removeEventListener('click', this.chooseColor)
        this.colors.naranja.removeEventListener('click', this.chooseColor)
        this.colors.verde.removeEventListener('click', this.chooseColor)       
    }

    chooseColor(ev){
        const colorName = ev.target.dataset.color
        const colorNumber = this.changeColorToNumber(colorName)
        this.illuminateColor(colorName)
        if (colorNumber === this.secuence[this.subLevel]){
            this.subLevel++
            if (this.subLevel === this.level){
                this.level++
                this.eliminateClick()
                if (this.level === (LAST_LEVEL + 1)){
                    //Win!
                } else {
                    setTimeout(this.nextLevel, 1500)
                }
            }
        } else {
            // lost
        }
    }
}

function startGame(){
    window.game = new Game()
}
