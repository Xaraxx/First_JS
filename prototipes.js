
function People(name, last_name){
    this.name = name
    this.last_name = last_name
    // Is not necesary return this, because javascript return it in a implicit way 
    }

People.prototype.greetings = function (){
    console.log(`Hi! my name is ${this.name} ${this.last_name}`)
}

var jorge = new People('Jorge', 'Galván')

jorge.greetings()

// homework

function inheritsFrom(prototypeSon, prototypeFather){
    var fn = function(){}
    fn.prototype = prototypeFather.prototype
    prototypeSon.prototype = new fn
    prototypeSon.prototype.constructor = prototypeSon
}

function InfoPeople(name, last_name, height){
    this.name = name
    this.last_name = last_name
    this.height = height
    // Is not necesary return this, because javascript return it in a implicit way 
    }

const TALL = 1.80

InfoPeople.prototype.isTall = function(){
    if(this.height >= TALL){
        console.log(`${this.name} ${this.last_name} is a tall person`);    
    } else{
        console.log(`${this.name} ${this.last_name} is a small person`)
    }
}    

function Developer(name, last_name){
    this.name = name
    this.last_name = last_name
}

inheritsFrom(Developer, InfoPeople)

Developer.prototype.greetings = function () {
    console.log(`Hello, my name is ${this.name} ${this.last_name} and I'm developer`)
}

maria.greetings()

var sergio = new InfoPeople('Sergio', 'Orozco', 1.76)
// var sofia = new InfoPeople('Sofia', 'Ortega', 1.86)
// var carlos = new InfoPeople('Carlos', 'Pontón', 1.65)
maria.isTall()
sergio.isTall()
// sofia.isTall()
// carlos.isTall()


