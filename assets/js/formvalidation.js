        //validationPassword
        function validationPass(){

            let passOne = document.getElementById("passwordOne").value;
            let passTwo = document.getElementById("passwordTwo").value;

            //Validacion de contraseña
            if(passOne == passTwo && passOne != ""){
                // alert("Son iguales");
                document.getElementById("messageErrorPass").innerHTML = "";
            }else if(passOne != "" && passTwo == ""){
                document.getElementById("messageErrorPass").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Confirma tu contraseña.<div>`;
            }else if( (passOne == "" && passTwo != "") || (passOne == "" && passTwo == "")){
                document.getElementById("messageErrorPass").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce una contraseña.</div>`;
            }else{
                document.getElementById("messageErrorPass").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Las contraseñas no coinciden. Inténtalo de nuevo.<div>`;
                document.getElementById("passwordTwo").value = "";
            } //else

        } //validationPass

        //validationFullName
        function validationFullName(){
        
            let strfName = document.getElementById("firstName").value;
            let strlName = document.getElementById("lastName").value;

            //Validacion de nombre y apeliidos
            if(strfName == "" && strlName == ""){
                // alert("Son iguales");
                document.getElementById("messageErrorName").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce el nombre y los apellidos.</div>`;
            }else if(strfName != "" && strlName == ""){
                document.getElementById("messageErrorName").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce tus apellidos.</div>`;
            }else if(strfName == "" && strlName != ""){
                document.getElementById("messageErrorName").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce tu nombre.</div>`;
            }else{
                document.getElementById("messageErrorName").innerHTML = "";
            } //else




        } //validationFullName

        //validationEmail
        function validationEmail(){

            let e_mail = document.getElementById("email").value;
            const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //regular expression

            //Validacion de email
            if(e_mail == ""){
                document.getElementById("messageErrorEmail").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce una correo electrónico.</div>`;
            }else if(!e_mail.match(pattern)){
                document.getElementById("messageErrorEmail").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Correo electrónico inválido.</div>`;
            }else{
                document.getElementById("messageErrorEmail").innerHTML = "";
            } //else

        } //validationEmail


        //validationPhone
        function validationPhone(){

            let phoneNumber = document.getElementById("phone").value;
            const pattern = /^[0-9]{10}$/;

            if(phoneNumber == ""){
                document.getElementById("messageErrorPhone").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce número de telefono.</div>`;
            }else if(!phoneNumber.match(pattern)){
                document.getElementById("messageErrorPhone").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Número invalido.</div>`;
            }else{
                document.getElementById("messageErrorPhone").innerHTML = "";
            } //else

        } //validationPhone


        
        function validationMessage(){

            //validationMessage
            let strMessage = document.getElementById("msg").value;
        
            if(strMessage == ""){
                document.getElementById("messageErrorMessage").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce un mensaje</div>`;
            }else{
                document.getElementById("messageErrorMessage").innerHTML = "";
            } //else

        }validationMessage
        


        document.getElementById("register").addEventListener("click", registerValidation);

        //Agrupa las funciones de validacion de registro
        function registerValidation(){
            validationFullName();
            validationEmail();
            validationPhone();
            validationPass();
        } //registerValidation


        //Agrupa las funciones de validacion de contacto
        function contactValidation(){
            validationFullName();
            validationEmail();
            validationPhone();
            validationMessage();
        } //contactValidation

        function loginValidation(){
            validationEmail();

            let pass = document.getElementById("passwordOne").value;

            if(pass == ""){
                document.getElementById("messageErrorPass").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce tu contraseña.</div>`;
                swal("Debe llenar todos los campos",{
                    icon: "error",
                    button: false,
                    timer: 1000,
                });
            }else{
                document.getElementById("messageErrorPass").innerHTML = "";
            }

        }