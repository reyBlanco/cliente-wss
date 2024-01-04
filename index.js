const c=console.log;
const d=document;
const $form=d.querySelector("#form");
const $texto=$form.querySelector("#texto_text");
const $opcion=$form.querySelector("#numero_number");
const $submit=$form.querySelector("#submit");
const $contenedor=d.querySelector("#contenedor");

const adress="wss://192.168.100.16:3001";
const wss=new WebSocket(adress);

wss.addEventListener("open",(ws)=>{
    wss.send("holaaa desde el cliente");
    
});

wss.addEventListener("message",(e)=>{
    c(e.data);
});
