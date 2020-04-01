class Persona {
    constructor (name, last_name, height){
        this.name = name
        this.last_name = last_name
        this.height = height
        // Is not necesary return this, because javascript return it in a implicit way 
        }

    greetings (fn){
        var {name, last_name} = this
        console.log(`Hi! my name is ${name} ${last_name}`)
        
        if (fn){
            fn(name, last_name, false)
        }    
    }
        

    isTall (){
        return this.height > 1.8
    }
}

class Desarrollador extends Persona {
    constructor (name, last_name, height){
        super(name, last_name, height)
    }
    greetings(fn) {
        var {name, last_name} = this
        console.log(`Hello, my name is ${name} ${last_name} and I'm developer`)
        if (fn){
            fn(name, last_name, true)
        } 
    }
}

function Developer(name, last_name){
    this.name = name
    this.last_name = last_name
}

Developer.prototype.greetings = function () {
    console.log(`Hello! my name is ${this.name} ${this.last_name} and I'm developer`)
}

function answer(name, last_name, isDev){
    console.log(`Good morning ${name} ${last_name}`)
    if (isDev){
        console.log(`Ok, you're developer! `)
    }
}

var sergio = new Persona('Sergio', 'Orozco', 1.76)
var sofia = new Persona('Sofia', 'Ortega', 1.86)
var carlos = new Desarrollador('Carlos', 'Pontón', 1.65)

sergio.greetings()
sofia.greetings(answer)
carlos.greetings(answer)