
if (userData != null){
    document.getElementById("modalUser").innerHTML = `
    <div class="modal fade jost" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="opacity: 0.95;">
        <div class="modal-content">
            <div class="modal-body modal-style">
                <div class="row text-center">
                    <div class="col" id="iconsModal">
                        <a href="#" class="nav-link" disabled>
                            <span class="icon-user"></span>
                        </a>
                    </div>
                    <div class="col" id="iconsModal">
                        <a class="nav-link" href="login.html" id="deleteCookieUser">
                            <span class="icon-sign-out"></span>
                        </a>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col" id="iconsModal">
                        <p class="jost" style="font-size: 20px; color: #3F3F44;">${userData}</p>
                    </div>
                    <div class="col" id="iconsModal">
                        <p class="jost" style="font-size: 20px; color: #3F3F44;">Cerrar Sesión</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer modal-style">
                <button type="button" class="bottom-style btn jost" data-bs-dismiss="modal" style="font-size: 20px;">Cerrar</button>
            </div>
        </div>
    </div>
    </div>
`;


document.getElementById("deleteCookieUser").addEventListener("click", deleteCookie); //Obtiene el elemento del id y manda a llamar a la funcion deleteCokie

var jsonCookie = "dataUser"

function deleteCookie(){
    document.cookie = `${jsonCookie} = ${onlyData}; expires = Fri, 31 Dec 2021 12:00:00 UTC; path=/ `
} //deleteCookie

}else{
    document.getElementById("modalUser").innerHTML = `
    <div class="modal fade jost" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="opacity: 0.95;">
        <div class="modal-content">
            <div class="modal-body modal-style">
                <div class="row text-center">
                    <div class="col" id="iconsModal">
                        <a href="register.html" class="nav-link">
                            <span class="icon-clipboard"></span>
                        </a>
                    </div>
                    <div class="col" id="iconsModal">
                        <a class="nav-link" href="login.html">
                            <span class="icon-enter"></span>
                        </a>
                    </div>
                </div>

                <div class="row text-center">
                    <div class="col" id="iconsModal">
                        <p class="jost" style="font-size: 20px; color: #3F3F44;">Registrarse</p>
                    </div>
                    <div class="col" id="iconsModal">
                        <p class="jost" style="font-size: 20px; color: #3F3F44;">Iniciar Sesión</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer modal-style">
                <button type="button" class="bottom-style btn jost" data-bs-dismiss="modal" style="font-size: 20px;">Cerrar</button>
            </div>
        </div>
    </div>
    </div>
`;
}










