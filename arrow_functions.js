// const ADULT_AGE = 18

// const isAdult = function (people) {
//     return people.age >= ADULT_AGE 
// }

const isNotAdult = (people) => {
    return people.age < ADULT_AGE
}

function printIsAdult(people){
    if (isAdult(people)){
        console.log(`${people.name} is an adult`)
    } else {
        console.log(`${people.name} is a child`)
    }
}