const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


function getCharacter(id, ){
    return new Promise((resolve, reject) => {
        const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, {crossDomain:true}, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

getCharacter(1)

.then((character) => {
    console.log(`Hello! I'm ${character.name}`)
    return getCharacter(2)
})

.then((character) => {
    console.log(`Hello! I'm ${character.name}`)
    return getCharacter(3)
})

.then((character) => {
    console.log(`Hello! I'm ${character.name}`)
    return getCharacter(4)
})

.then((character) => {
    console.log(`Hello! I'm ${character.name}`)
    return getCharacter(5)
})

.then((character) => {
    console.log(`Hello! I'm ${character.name}`)
    return getCharacter(6)
})

.then((character) => {
    console.log(`Hello! I'm ${character.name}`)
    return getCharacter(7)
})

.then((character) => {
    console.log(`Hello! I'm ${character.name}`)
})

.catch(onError)

function onError(id){
    console.log(`We have something wrong at this moment. Is impossible get the character ${id} `)}



// getCharacter(1, function(character){
//     console.log(`Hello! I'm ${character.name}`) 
// })

// getCharacter(1, function(character){
//     console.log(`Hello! I'm ${character.name}`) 
//     getCharacter(2, function(character){
//         console.log(`Hello! I'm ${character.name}`) 
//         getCharacter(3, function(character){
//             console.log(`Hello! I'm ${character.name}`)
//             getCharacter(4, function(character){
//                 console.log(`Hello! I'm ${character.name}`) 
//                 getCharacter(5, function(character){
//                     console.log(`Hello! I'm ${character.name}`) 
//                     getCharacter(6, function(character){
//                         console.log(`Hello! I'm ${character.name}`)
//                     })
//                 })
//             })
//         })
//     })
// })

