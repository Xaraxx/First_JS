var zodiacal_sign = prompt('which is your zodiacal sign?')

console.log(zodiacal_sign)

switch (zodiacal_sign) {
    case 'aries':
        console.log('Entienda que si se deja guiar por la voz de la intuición y la sabiduría interior, pronto podrá abandonar la inseguridad y los temores que lo persiguen.')
        break 

    case 'tauro':
        console.log('Durante este día, recibirá más de una propuesta interesante que le dará esperanzas y fuerzas para continuar en sus objetivos. Escoja las más conveniente.')
    break

    case 'geminis':
    case 'géminis':
        console.log('Despreocúpese, ya que su capacidad para tomar decisiones se combinará con la sensibilidad e intuición. Gracias a ellas decidirá de manera correcta.')
        break

    case 'cancer':
    case 'cáncer':
        console.log('Atravesará algunos momentos donde la intranquilidad podría arrebatarle muchos de los éxitos que le ha costado demasiado trabajo conseguir. Evite que suceda.')
        break
    default:
        console.log('Zodiacal sign not found.')
}

// if (zodiacal_sign === 'aries'){
//     console.log('Entienda que si se deja guiar por la voz de la intuición y la sabiduría interior, pronto podrá abandonar la inseguridad y los temores que lo persiguen.')
// }