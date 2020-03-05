var sonia = {
    name: 'Sonia',
    last_name: 'Gonzales',
    age: '34',
    engineer: true,
    cooker: false,
    singer: true
}

var juan = {
    name: 'Juan',
    last_name: 'Cardona',
    age: '14'
}

function printInfo(people){
    console.log(`${people.name} is: `)
    
    if (people.engineer){
        console.log(`Engineer `)
    } else {
        console.log(` Is not engineer `)
    }
    
    if (people.cooker){
        console.log(`Cooker `)
    } else {
        console.log(`Is not cooker `)
    }

    if (people.singer){
        console.log(`Singer `)
    } else {
        console.log(`Is not  a singer `)
    }
}

const ADULT_AGE = 18

function isAdult(people){
    return people.age >= ADULT_AGE 
}

function printIsAdult(people){
    if (isAdult(people)){
        console.log(`${people.name} is an adult`)
    } else {
        console.log(`${people.name} is a child`)
    }
}