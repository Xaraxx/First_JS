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
    age: '53'
}

var sonia = {
    name: 'Sonia',
    last_name: 'Gonzales',
    age: '34'
}

function printNameInMay(people){
    var  name = people.name.toUpperCase()
    console.log(name)
}
printNameInMay(sofia)
printNameInMay(sonia)