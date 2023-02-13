let pasword = 7777

let fkingpasword

let fkingnumber = 10

alert('агар кода 10 марта хато навеси дастата зада мишканам бача нервамба бози накун')

while (fkingpasword !== pasword) {
    fkingpasword = +prompt('кода навес')

    if(fkingpasword === pasword) {
        alert('даро укажон')
    } else {
        alert('осталось ' + fkingnumber + ' попыток')
    }

    fkingnumber -= 1

    if(fkingnumber === 0) {
        alert('гуфтама дастата мишканам гуфта дор дастата')
        break
    }

}