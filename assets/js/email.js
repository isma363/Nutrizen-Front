function dataForm(){
    const name = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const msg = document.getElementById("msg").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name.length > 0 && lastName.length > 0 && email.length > 0  && phone.length > 0 && msg.length > 0) {
        // alert("Mensaje enviado");
        Email.send({
            Host : "smtp.mailtrap.io",
            Username : "6a2fe7507e0c92",
            Password : "fa720f690cf506",
            To : 'c.nutrizen@gmail.com',
            From : `${email}`,
            Subject : "Contacto a nutrizen",
            Body : `${msg}<br><br>${name} ${lastName}<br><br>Telefono: ${phone}`
        }).then(
            message => (swal("Mensaje enviado",{
                icon: "success",
                button:false,
                timer: 2000,
            }))
        );

        setTimeout("redirectPage()", 2000);
        
    }else{
        // alert("Debe llenar todos los campos");
        swal("Debe llenar todos los campos",{
            icon: "error",
            button: false,
            timer: 1000,
            
        });
    }

}

function redirectPage(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("msg").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
} //redirectPage()