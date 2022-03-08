

/*
//Se obtienen los valores de los imputs y se valida informacion
function getUsers(){

    var userEmail = document.getElementById("email").value
    var userPass = document.getElementById("passwordOne").value

    if(userEmail.length > 0 && userPass.length > 0){

        fetch('../../assets/js/userdb.json')
        .then((respuesta) => respuesta.json())
        .then(fakeDatos => {
            
            fakeDatos.forEach(element => {
                existingUser(userEmail, userPass, element);
            });
        
        })
        .catch((err) => console.log(err));
        //existingUser(userEmail, userPass);
    }else{
        swal("Debe llenar todos los campos",{
            icon: "error",
            button: false,
            timer: 1000,
        });
    }//else

}//getUsers

//Metodo implementado desde el local storage

//class Usuario
function userData(firstName, lastName, e_mail, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = e_mail;
    this.password = password;
} //class userData

//Se crean los objetos de los usuarios
var userOne = new userData('Julio', 'Xochimitl', 'julio.xochimitl.g@gmail.com', '123');

var userTwo = new userData('Laura', 'Madrigal','hijintortor@gmail.com', 'Adiosamigosmios');

var userThree = new userData('Luis', 'Miguel', 'yourdestiny39@gmail.com', 'Inserteunacontraseña');

var adminOne = new userData('Administrador', 'Uno', 'admin.one@gmail.com', '123456');


//Se agregan los objetos en localStorage en formato JSON
localStorage.setItem(
    1, JSON.stringify(userOne)
);

localStorage.setItem(
    2, JSON.stringify(userTwo)
);
localStorage.setItem(
    3, JSON.stringify(userThree)
);

localStorage.setItem(
    4, JSON.stringify(adminOne)
);
*/


function loginUser(){
    //obtiene los valores de los inputs
    var userEmail = document.getElementById("email").value
    var userPass = document.getElementById("passwordOne").value;
    //Imprime en consola los valores obtenidos
    console.log(userEmail + " " + userPass);
    
    //Almacena en un objeto los valores obtenidos
    var dataUser = {email: userEmail, password: userPass}

    //Imprime en consola los valores en formato JSON
    console.log(JSON.stringify(dataUser))

    //Fetch con metodo post que compara los datos ingresadps
    fetch("/api/login/", {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataUser),
    })
    .then(response => response.text())
    .then(dataUser => {

        console.log('Success:', dataUser);


        if(dataUser == "true"){
            //console.log("vientos")
            document.getElementById("userPassIncorrect").innerHTML = "";
            document.getElementById("userNoRegister").innerHTML = "";
            addUserCookies(userEmail);
        }else{
            //console.log("novientos");
            document.getElementById("userPassIncorrect").innerHTML = `
            <p class="text-center" style="border: solid 2px #FF6464; border-radius: 10px; color: #FF6464; font-size: 18px;">Email o contraseña incorrectos</p>`
            document.getElementById("userNoRegister").innerHTML = `<br><div class="text-center" style="font-size:18px">¿Quieres formar parte de nuestra familia? <a class="register-here" href="register.html">Registrate aquí</a></div>
            <hr>`
        }


    })
    .catch((error) => {
    console.error('Error:', error);
    });

};


function addUserCookies(email){
    var arrayEmail = email.split("@");
    var onlyEmail = arrayEmail[0];
    //console.log(arrayEmail);
    //console.log(onlyEmail);

    //Alerta de bienvenida
    swal("Bienvenido de vuelta",{
        icon: "success",
        button:false,
        timer: 1000
    })

    var d = new Date(); //Obtiene la fecha actual

    var jsonCookie = "dataUser";

    //Almacena en cookies el objeto email
    document.cookie = `${jsonCookie} = ${JSON.stringify(onlyEmail)}; expires = ${addDays(d, 15)};`

    setTimeout("redirectPage()", 1000); //Redirecciona la pagina en cierto tiempo / 1 seg = 1000mseg

}//addUserCookies




/*
function existingUser(email, pass, userElement){


    //console.log(userElement);
    //var userElementTam = userElement.length;
    //var user; //Almacena los datos del objeto
    //var localTam = localStorage.length; //Determina el tamaño de los elementos dentro de localStorage

    //for(let i = 0; i <= userElementTam; i++){
        //user = JSON.parse(localStorage.getItem(i));
        // console.log(user);

        if(email == userElement.email && pass == userElement.password){
            console.log("El correo electronico: '"+ email + "' es igual a '" + userElement.email + "'");
            console.log("La contraseña '" + pass + "' es igual a '" + userElement.password + "'");

            var validUser = {
                'fName': userElement.first_name,
                'lName': userElement.last_name,
                'email': email
            } //validUser

            var d = new Date(); //Obtiene la fecha actual

            var jsonCookie = "dataUser";

            //Almacena en cookies el objeto email
            document.cookie = `${jsonCookie} = ${JSON.stringify(validUser)}; expires = ${addDays(d, 15)};`

            //Alerta de bienvenida
            swal("Bienvenido de vuelta",{
                icon: "success",
                button:false,
                timer: 1000
            })

            setTimeout("redirectPage()", 1000); //Redirecciona la pagina en cierto tiempo / 1 seg = 1000mseg

        }else if(pass != userElement.password && email == userElement.email){

            document.getElementById("messageErrorPass").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Contraseña incorrecta</div>`;
            document.getElementById("passwordOne").value = "";

        }else if(email != userElement.email){
            document.getElementById("userNoRegister").innerHTML = `<br><div class="text-center" style="font-size:18px">¿Quieres formar parte de nuestra familia? <a class="register-here" href="register.html">Registrate aquí</a></div>
            <hr>`
        }

    //} //for

} //existingUser

*/

// Sumara dias a la fecha actual
function addDays(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
} //addDays


function redirectPage(){
    window.location = "index.html";
} //redirectPage()
