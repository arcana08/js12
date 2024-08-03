const enviar=document.getElementById("enviar");
enviar.addEventListener("click",function(){
    const nombre =$('#txt_nombre').val();
    console.log(nombre);
    alert(nombre);
});
const cambiar=document.getElementById("cambiar");
cambiar.addEventListener("click",function(){
    $('#txt_nombre').val("un nuevo nombre");
    
});
