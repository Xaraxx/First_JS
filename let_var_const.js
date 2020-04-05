var jorge = {
    name: 'Jorge',
    last_name: 'Galvan',
    age: 11
}

var sergio = {
    name: 'Sergio',
    last_name: 'Orozco',
    age: 28
}


function isOlder(people){
    if (people.age > 18){
        var message = 'Is really old'
    } else {
        var message = 'Is just a boy!'
    }

    console.log(message)
}

isOlder(jorge)

daysBetweenDates = (date1, date2) => {
    const dayInMiliseconds = 1000 * 3600 * 24
    const delta = Math.abs(date1 - date2)

    return Math.floor(delta / dayInMiliseconds)
}

const today = new Date()
const birthday = new Date(1990, 7, 12)

function integerDivision(dividend, divisor){
    if (dividend < divisor){ 
        return 0
    }

    return 1 + integerDivision(dividend - divisor, divisor)
}

function factorial(n){
    if (!this.cache){
        this.cache = {}
    }
    debugger
    if (this.cache[n]){
        return this.cache[n]
    }

    if(n === 1){
        return 1
    }

    this.cache[n] = n * factorial(n - 1)
    debugger   
    return this.cache[n]
}

function manyGreetings(endSentence){
    return function(name){
        console.log(` Hello ${name} ${endSentence}`)
    }
}

const americanGreeting = manyGreetings('Bro!') 
const colombianGreeting = manyGreetings('parce!') 
const mexicanGreeting = manyGreetings('güey!') 

americanGreeting(jorge.name)
colombianGreeting(jorge.name)
mexicanGreeting(jorge.name)

const hBirthday = people => {
     return people.age++
    }


const inmutableHB = people => ({
    ...people,
    age : people.age + 1
})

function saludar(){
    console.log(`Hello! my name is ${this.name} ${this.last_name}`)
}

function saludar2(saludo = 'Hi!'){
    console.log(`${saludo} my name is ${this.name} ${this.last_name}`)
}


// const saludarSergio = saludar.bind(sergio)
// const saludarJorge = saludar.bind(jorge)

// setTimeout(saludar2.bind(sergio, 'good morning'), 1000)
// setTimeout(saludar2.bind(sergio), 1000)

// saludar2.call(jorge, 'good night')

saludar2.apply(sergio, ['Hola che'])
