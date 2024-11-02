const subject = ["Il tuo team", "Chi ha il coraggio", "Ogni giorno che passa","Chi non molla mai","Il vero leader","Chi sogna in grande"];
const actions = ["raggiunge nuovi traguardi","crea opportunità dal nulla","trova la strada per il successo","prende in mano il proprio destino"];
const results = ["e trova il successo","e ispira gli altri","e diventa più forte", "e apre nuove strade","e costruisce il futuro che desidera"];
    

const generaMessaggio=()=>{
    const randomSubject = Math.floor(Math.random()*subject.length);
    let messaggio = subject[randomSubject];

    const randomAct = Math.floor(Math.random()*actions.length);
    messaggio+=" "+actions[randomAct];

    const randomRes = Math.floor(Math.random()*results.length);
    messaggio+=" "+results[randomRes];

    console.log(messaggio);
}

generaMessaggio();
