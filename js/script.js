// creo un array con una lista di mail,
const mail = ["paoligino@icloud.com","tizianotambone@icloud.com","nellotavernello@gmail.com","tulliotamb@gmail.com","perbacco@gmail.com"]
// faccio inserire la mail all'utente 
let insMail = prompt("inserisci la mail")
// controllo la lista 
let checkMail = false;
// ciclo arry per confrontare la mail inserita con quelle registrate
for(let i=0; checkMail ==false && i<mail.length; i++){
    if(insMail != mail[i]){
        checkMail=false
    }
    else{

        checkMail=true
    }
    
}
if(checkMail==true){
    console.log("invitato")
}
else{
    console.log("non invitato")
}

// esercizio 2+
 
// assegno la variabile human dove indico al player di inserire un numero compreso tra 1-6
let human = prompt("inserisci un numero tra uno e 6");
console.log(human);
//  indico la variabile pc dove indico al pc di generare un numero casuale compreso tra 1-6
let pc =  Math.floor(Math.random()*6)+1;
console.log(pc);
// se il numero scritto da human è minore di  quello generato dal pc esce lo scripit hai perso

if(human<pc){
    console.log("hai perso");
}
// se il numero scritto da human è maggiore di  quello generato dal pc esce lo scripit hai vinto
else if (human>pc){
    console.log("hai vinto");
}
//  altrimenti esce lo script pareggio
else{
    console.log("pari");
}


