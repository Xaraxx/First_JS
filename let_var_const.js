var jorge = {
    name: 'Jorge',
    age: 11
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
