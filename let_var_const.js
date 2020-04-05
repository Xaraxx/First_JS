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