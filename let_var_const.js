var jorge = {
    name: 'Jorge',
    age: 11
}

function isOlder(people){
    if (people.age > 18){
        var message = 'Is really old'
    } else {
        var message = 'Is just a boy!'
    }

    console.log(message)
}

isOlder(jorge)