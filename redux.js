var juan = {
    name: 'Juan',
    last_name: 'Cardona',
    height: 1.54,
    books: 26
}
var sonia = {
    name: 'Sonia',
    last_name: 'Cardona',
    height: 1.60,
    books: 24
}
var maira = {
    name: 'Maira',
    last_name: 'Cortez',
    height: 1.64,
    books: 45
}
var karen = {
    name: 'Karen',
    last_name: 'Gonzales',
    height: 1.76,
    books: 56
}
var tomas = {
    name: 'Tomas',
    last_name: 'Guzman',
    height: 1.80,
    books: 24
}

var allPeople = [juan, sonia, maira, karen, tomas]

var total = 0

for(i = 0; i < allPeople.length; i++){
    people = allPeople[i]
    total = total + people.books
}

console.log(total)

// other way
const totalBooks = (total, allPeople) => {
    return total + allPeople.books
}

var sumOfBooks = allPeople.reduce(totalBooks, 0)
console.log(sumOfBooks)

