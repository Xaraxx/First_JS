var juan = {
    name: 'Juan',
    last_name: 'Cardona',
    height: 1.54
}
var sonia = {
    name: 'Sonia',
    last_name: 'Cardona',
    height: 1.60
}
var maira = {
    name: 'Maira',
    last_name: 'Cortez',
    height: 1.64
}
var karen = {
    name: 'Karen',
    last_name: 'Gonzales',
    height: 1.76
}
var tomas = {
    name: 'Tomas',
    last_name: 'Guzman',
    height: 1.80
}

var allPeople = [juan, sonia, maira, karen, tomas];

// personas[0].altura es equivalente a personas[0]['altura']


for (var i = 0; i < allPeople.lenght; i++) {
    var people = allPeople[i]
    console.log(`${people.name} is ${people.height} meters`);
}

const isTall = (allPeople) => {
    return allPeople.height > 1.67
}

var tallPeople = allPeople.filter(isTall)

console.log(tallPeople)

// other way

var isTall2 = ({height}) => {
    return height > 1.67
}

var tallPeople = allPeople.filter(isTall2)

// homework
var isSmall = (allPeople) => {
    return allPeople.height < 1.67
}

var smallPeople = allPeople.filter(isSmall)
console.log(smallPeople)
