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
// indico al player di inserire un numero compreso tra 1-6

 
// assegno la variabile human dove
let human = prompt("inserisci un numero tra uno e 6");
console.log(human);
let pc =  Math.floor(Math.random()*6)+1;
console.log(pc);

if(human<pc){
    console.log("hai perso");
}
else if (human>pc){
    console.log("hai vinto");
}
else{
    console.log("pari");
}


