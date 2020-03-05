var name1 = 'Sacha', age1 = '28'

function printEdge(nam, ag){
    console.log( `${nam} has ${ag} years old`)
}

printEdge()

function printNameInCapital(name){
    name = name.toUpperCase()
    console.log(name)
}

// Objects

var sofia = {
    name: 'Sofia',
    last_name: 'Cortez',
    age: 53
}

var sonia = {
    name: 'Sonia',
    last_name: 'Gonzales',
    age: '34'
}

function printNameInMay(people){
    // var  name = people.name.toUpperCase()
    // is this the same that 
    var { name } = people
    console.log( name.toUpperCase() )
    // console.log(name)
}
printNameInMay(sofia)
printNameInMay(sonia)


function printNewName({ name }){
    console.log(name.toUpperCase())
}

printNewName(sofia)
printNewName(sonia)
printNewName({ name:'pepitos' })

function greetings(people){
    var { name , age} = people
    console.log(`Hello my name is ${name} and I am ${age} years old`)
}

greetings(sofia)
greetings(sonia)

function birthday(people){
    return {
        ...people,
        age: people.age += 1
    }
    
}