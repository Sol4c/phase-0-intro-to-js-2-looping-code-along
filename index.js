
const greetings = []


function writeCards(names){
    
    for (let n = 0; n < names.length; n++){
        console.log(`Thank you, ${names[n]}, for the wonderful surprise gift!`);
        greetings.push(`Thank you, ${names[n]}, for the wonderful surprise gift!`)
    }
    return greetings

}

function countDown(number){
    
    for (; number >= 0; number--){
    console.log(number)
    }
}



