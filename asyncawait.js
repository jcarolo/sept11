

let datosUsuario={
    usuario:"jcaro@gmail.com",
    password:"Admin123"
}




async function procesarPeticion(datosUsuario){ //intento ejecuar algo y capturo que paso
    try {
        let respuesta=await conectarConNetflix(datosUsuario);
        console.log(respuesta)

    }catch(error){
        console.log (error)
    }    
}

procesarPeticion(datosUsuario);
