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

const changeUnits = (allPeople) => {
    return allPeople.height * 100
}

// other way

const changeUnits2 = (allPeople) => {
    // allPeople.height *= 100
    return {
        ...allPeople,
        height: allPeople.height * 100 
    };
}

// other way

const changeUnits3 = (allPeople) => ({   
        ...allPeople,
        height: allPeople.height * 100 

})
heightInCentimeters = allPeople.map(changeUnits)
heightInCentimeters2 = allPeople.map(changeUnits2)

console.log(heightInCentimeters)
console.log(heightInCentimeters2)


console.log(`${allPeople.name} is ${heightInCentimeters}cm`);

