document.getElementById("register").addEventListener("click", newUser)

function newUser(){

    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var e_mail = document.getElementById("email").value;
    var numPhone = document.getElementById("phone").value;
    var pass_01 = document.getElementById("passwordOne").value;
    var pass_02 = document.getElementById("passwordTwo").value;

    /*
    fetch('../../assets/js/userdb.json')
    .then((respuesta) => respuesta.json())
    .then(fakeDatos => {
        
        fakeDatos.forEach(element => {
            if(e_mail == element.email){
                document.getElementById("messageErrorEmail").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Este correo electrónico ya está en uso.</div>`;
            }
        });
    
    })
    .catch((err) => console.log(err));
    */

    /*
    const userObject(fName, lName, eMail, nPhone, password){
        this.fName = fName;
        this.lName = lName;
        this.eMail = eMail;
        this.nPhone = nPhone;
        this.password = password;
    }
    */

    if(fName.length > 0 && lName.length > 0 && e_mail.length > 0 && numPhone.length > 0 && pass_01.length > 0 && pass_02.length > 0) {

        /*
        addNewUser = new userObject(fName, lName,e_mail,numPhone,pass_01);
        var userJSON = JSON.stringify(addNewUser);
        console.log(userJSON);
        */
        ///// El siguiente código agrega un nuevo usuario mediante un POST
        const addNewUser = {first_name: fName, last_name: lName, email: e_mail, phone: numPhone, password: pass_01}

        fetch('/api/users/', {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addNewUser),
            })
            .then((response) => response.text())
            .then((addNewUser) => {

                if(addNewUser == ""){
                    swal("Registro exitoso",{
                        icon: "success",
                        button:false
                    })
                    setTimeout("redirectPage()", 2000); //Redirecciona la pagina en cierto tiempo / 1 seg = 1000mseg
                }else{
                    document.getElementById("messageErrorEmail").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Este correo electrónico ya está en uso.</div>`;

                    document.getElementById("emailAlredyRegister").innerHTML =`<br><div class="text-center" style="font-size:18px">Ya eres parte de la familia. <a class="register-here" href="login.html">Inicia Sesión</a></div>
                    <hr>`
                }

                // console.log("Success:", typeof(addNewUser));
                // console.log("probando" + addNewUser);

            })
            .catch((error) => {
                console.error("Error:", error);
                console.log("")
            });

        //setTimeout("redirectPage()", 2000); //Redirecciona la pagina en cierto tiempo / 1 seg = 1000mseg

    }else{
        
        swal("Debe llenar todos los campos",{
            icon: "error",
            button: false,
            timer: 2000
        });
    }
    // console.log(addNewUser);
}

function redirectPage(){
    window.location = "login.html";
} //redirectPage()






