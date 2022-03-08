var usuario=[];

function almacenamiento(){

    var nombre=document.getElementById('firstName').value,
        apellido=document.getElementById('lastName').value,
        correo=document.getElementById('email').value,
        telefono=document.getElementById('phone').value,
        mensaje=document.getElementById('msg').value;

        usuario.push(nombre,apellido,correo,telefono,mensaje);

    localStorage.setItem('Usuario'+telefono, JSON.stringify(usuario));

}