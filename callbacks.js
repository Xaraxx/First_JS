const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
$.get(lukeUrl , { crossDomain:true }, function (luke){
    // console.log(arguments)
    console.log(`Hola yo soy ${luke.name}`)
})

const onPeopleResponse = function(people){
    console.log(`Hello! I'm ${people.name}`)
}

function getCharacter(id){
    const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, {crossDomain:true}, onPeopleResponse)
}

getCharacter(1)
getCharacter(2)

