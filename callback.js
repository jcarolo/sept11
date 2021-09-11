
//datos del usuario

let datosUsuario={
    usuario:"jcaro@gmail.com",
    password:"Admin123"
}

// funcion principal declaro que hace la funcion
//declaro lo que hace el callback
function conectarConNetflix(datos,generarRespuestaCallback){
    // preguntar si los datos son correctos

setTimeout(function(){

    if(datos.usuario==="jcaro@gmail.com" && datos.password==="Admin123"){

        //login ok

generarRespuestaCallback(200)
    }else{
        // login fail
        generarRespuestaCallback(204)
    }

},5000)
}


// utilizar la funcion principal
// declaro lo que hace el callback

conectarConNetflix(datosUsuario,function(codigo){
    if(codigo==200){

        console.log("ok, bienvenido")

    }else{

        console.log("revisa datos")

    }
})
    
