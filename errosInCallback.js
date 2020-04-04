const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const greetings = document.getElementById('greetings') 

// .greetings

function getCharacter(id, callback){
    const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, {crossDomain:true}, callback).fail(function(){
        console.log(`We have something wrong at this moment. Is impossible get the character ${id} `)
    })
}

getCharacter(1, function(character){
    console.log(`Hello! I'm ${character.name}`) 
})

getCharacter(1, function(character){
    console.log(`Hello! I'm ${character.name}`) 
    getCharacter(2, function(character){
        console.log(`Hello! I'm ${character.name}`) 
        getCharacter(3, function(character){
            console.log(`Hello! I'm ${character.name}`)
            getCharacter(4, function(character){
                console.log(`Hello! I'm ${character.name}`) 
                getCharacter(5, function(character){
                    console.log(`Hello! I'm ${character.name}`) 
                    getCharacter(6, function(character){
                        console.log(`Hello! I'm ${character.name}`)
                    })
                })
            })
        })
    })
})

