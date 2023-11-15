// che informazioni ho ?
// so che devo stampare dei numeri da 1 a 100
// per ogni multiplo di 3 devo far stampare fizz
//per i multipli di 5 devo far stampare buzz
// per  i multipli di entrambi far stampare fizz buzz

// stampo numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // mi chiedo come faccio a stampare per i multipli dei numeri interessati
    // mi chiedo come faccio a dire alla macchina di sostituire i numeri con le risposte che voglio
    // applico il tutto tenendo a mente che bisogna rispettare l'ordine degli if else
    /* if (i % 3 != 0 && i % 5 !=0 ){
        console.log(i)
    }
    */
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    } else if (i % 3 == 0){
        console.log("Fizz")
    } else if (i % 5 == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}



