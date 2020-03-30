var sonia = {
    name: 'Sonia',
    last_name: 'Gonzales',
    age: '34',
    weight: 75
}

console.log(`At the begining of the year, ${sonia.name} weights ${sonia.weight}kg`)

// const upWeight = (people, increase) =>{
//     people.weight += increase
// }

const WEIGHT_INCREASE = 0.2

const upWeight = people => people.weight += WEIGHT_INCREASE
const downWeight = people => people.weight -= WEIGHT_INCREASE

for (var i = 1; i <= 365; i++ ){
    var random = Math.random()

    if (random < 0.25){
        upWeight(sonia)
    } else if(random < 0.5) {
        downWeight(sonia)
    }
}

console.log(`At the end of the year, ${sonia.name} weights ${sonia.weight.toFixed(3)}kg`)
