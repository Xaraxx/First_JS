const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


function getCharacter(id, callback){
    const url =`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, {crossDomain:true}, function(people){
        console.log(`Hello! I'm ${people.name}`)
        if(callback){
            callback(id)
        }
    })
}

getCharacter(1, function(){
    getCharacter(2, function(){
        getCharacter(3, function(){
            getCharacter(4, function(){
                getCharacter(5, function(){
                    getCharacter(6)
                })
            })
        })
    })
})

