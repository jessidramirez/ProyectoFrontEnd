const Mensaje=[];
if(typeof(Storage)!=='undefined'){
    console.log(Storage);
    Mensajes=['Mensaje 1','Mensaje 2','Mensaje 3','Mensaje 4'];
}else{
    alert('Storage no es compatible')
}
function enviarDatos(contacto){
    localStorage.setItem("Mensajes",JSON.stringify(contacto));
    window.alert('Se enviaron los Datos correctamente');
    
    }
    
    const form = document.querySelector("#contacto");
    
    form.addEventListener("submit", function (event) {
    
    let nombre = document.getElementById('nombre').value;
    let correo= document.getElementById('email').value;
    let telefono= document.getElementById('telefono').value;
    let asunto= document.getElementById('asunto').value;
    let mensaje= document.getElementById('mensaje').value;
    
    let contacto=[nombre,correo,telefono,asunto,mensaje];
    console.log(contacto);
    if (!(nombre==null)) {
        enviarDatos(contacto);
        
    }else{
            window.alert('Error')
    }
    });