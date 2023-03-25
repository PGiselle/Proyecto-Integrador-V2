//Variables


//Funciones

const generarUsuario = async ()=>{
   
        const url = "https://randomuser.me/api/";
        const respuesta = await fetch(url);
        const {results} = await respuesta.json();
        const perfil = results[0];
        console.log(perfil);
        return perfil;
   
}
