//Variables
var usuario
var foto = document.getElementById("foto-perfil");
var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var email = document.getElementById("correo")
var telefono = document.getElementById("tel")
var direccion = document.getElementById("dire")
var ciudad = document.getElementById("ciudad")
//secciones
var seccionMi = document.getElementById("mi")
var seccionExperiencia = document.getElementById("experiencia")
var seccionEstudios = document.getElementById("estudios")
var seccionContacto = document.getElementById("contacto")

//Funciones
function cargarFoto(imagen) {
    foto.src=imagen
}
function cargarNombre(nombreUsuario){
    nombre.innerText = nombreUsuario;
}

function ocultar(elemento){
    switch (elemento) {
        case "mi":
            seccionMi.hidden = false;
            seccionExperiencia.hidden = true;
            seccionEstudios.hidden = true;
            seccionContacto.hidden = true;
            
            break;
        case "experiencia":
            seccionMi.hidden = true;
            seccionExperiencia.hidden = false;
            seccionEstudios.hidden = true;
            seccionContacto.hidden = true;
            
            break;
        case "estudios":
            seccionMi.hidden = true;
            seccionExperiencia.hidden = true;
            seccionEstudios.hidden = false;
            seccionContacto.hidden = true;
            
            break;
        case "contacto":
            seccionMi.hidden =  true;
            seccionExperiencia.hidden = true;
            seccionEstudios.hidden =  true;
            seccionContacto.hidden = false;
                
            break;
            
        default:
            seccionMi.hidden = true;
            seccionExperiencia.hidden = true;
            seccionEstudios.hidden = true;
            seccionContacto.hidden = true;
            break;
    }
}
const generarUsuario = async ()=>{

    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const perfil = results[0]
    usuario = perfil;
    console.log(usuario)
    cargarFoto(usuario.picture.large)
    cargarNombre(usuario.name.first)
    //carga de datos de contacto
    correo.innerText = usuario.email;
    telefono.innerText = usuario.cell;
    direccion.innerHTML = usuario.location.street.name +" "+ usuario.location.street.number;
    ciudad.innerText = usuario.location.state;
    //fin de carga de datos de contacto


}

//inicio de aplicacion


generarUsuario()
ocultar("mi")
