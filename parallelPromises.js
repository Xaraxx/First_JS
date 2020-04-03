const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


function getCharacter(id){
    return new Promise((resolve, reject) => {
        const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, {crossDomain:true}, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

var ids = [1, 2, 3, 4, 5, 6, 7]

// var promises = ids.map(function(id){
//     return getCharacter(id)
// })
var promises = ids.map(id => {
    return getCharacter(id)
})

Promise.all(promises).then((characters) => console.log(characters)).catch(onError)

// .then((character) => {
//     console.log(`Hello! I'm ${character.name}`)
// })

// .catch(onError)

function onError(id){
    console.log(`We have something wrong at this moment. Is impossible get the character ${id} `)}

