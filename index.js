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
    wss.send(JSON.stringify({mensaje:"hola desde el cliente"}));
    ws.preventDefault();
});

wss.addEventListener("message",msg=>{
    c(msg.data);
    let getPaquete=JSON.parse(msg.data);
    $contenedor.innerHTML="";
    for(const atributo in getPaquete){
        if(typeof getPaquete[atributo]==="string"){
            $contenedor.innerHTML+=`<B>${atributo}:${getPaquete[atributo]}</B><br>`;
        }

        if(typeof getPaquete[atributo]==="object"){
            let obj=getPaquete[atributo];
            for(const key in obj){
                $contenedor.innerHTML+=`<B>${key}:${obj[key]}</B><br>`;
            }
        }
    }
    msg.preventDefault();
});

d.addEventListener("click",(e)=>{
    e.preventDefault();
    if($submit===e.target){
        let paquete={
            texto:$texto.value,
            opcion:$opcion.value
        }

        wss.send(JSON.stringify(paquete));
    }
});