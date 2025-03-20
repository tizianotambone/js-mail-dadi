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
