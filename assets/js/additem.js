/* Modal agregar item */
document.getElementById("modalAdd").innerHTML = `
    <div class="modal fade jost" id="modalAddItems" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="opacity: 0.95;">
            <div class="modal-content">
                <div class="modal-body modal-style">

                    <h4 class="text-center"><b>Agregar ítem</b></h4>

                    <input type="text" id="itemName" class="form-control jost rounded-0 input-style" placeholder="Nombre"/>
                    <span id="messageErrorItemName"></span>

                    <br>
                    <input type="text" id="itemImg" class="form-control jost rounded-0 input-style" placeholder="Imagen"/>
                    <span id="messageErrorImg"></span>

                    <br>
                    <input type="number" id="priceItem" class="form-control jost rounded-0 input-style" placeholder="Precio" min="1"/>
                    <span id="messageErrorItemPrice"></span>

                    <br>
                    <textarea type="text" id="descItem" class="form-control jost rounded-0 input-style" placeholder="Descripción" style="max-width: 100%; max-height: 150px; min-height: 100px;"></textarea>
                    <span id="messageErrorItemDesc"></span>
                    
                    <br>
                    <button class="bottom-style btn jost" onclick="getItem(); allValidations();" style="font-size: 20px;">Agregar</button>
                </div>
                <div class="modal-footer modal-style">
                    <button type="button" class="bottom-style btn jost" data-bs-dismiss="modal" style="font-size: 20px;">Cerrar</button>
                </div>
            </div>
        </div>
        </div>
`;
/* /Modal agregar item */


/* Funcion agregar items */
/*
function addItem(item){
    const itemHTML = `
    <div class="col-lg-3" data-aos="fade-up" data-aos-duration="2000" style="padding-bottom: 25px;">
                <div class="card card-style jost border border-0">
                    <img src="${item.img}" class="card-img-top"
                        alt="Fissure in Sandstone" />
                    <div class="card-body">
                        <h4 class="card-title text-justify"><b>${item.name}</b></h4>
                        <h5>$${item.price}</h5>
                        <p class="card-text text-justify">
                            ${item.desc}
                        </p>
                    </div>
                    <div style="padding: 16px;">
                        <input type="number" id="name" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input" min="1" max="10" value="1"/>
                        <br>
                        <a href="#!" class="btn card-btn" style="width: 100%;">Agregar</a>
                    </div>
                </div>
            </div>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
*/


function validationItemName(){

    let itemName = document.getElementById("itemName").value;
    /*
    */

    if(itemName == ""){
        document.getElementById("messageErrorItemName").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce el nombre del producto.<div>`;
    }else{
        document.getElementById("messageErrorItemName").innerHTML = "";
    } //else

}//validationItemName

function validationUrlImage(){
    
    let itemIgm = document.getElementById("itemImg").value;

    if(itemIgm == ""){
        document.getElementById("messageErrorImg").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce el url de la imagen.<div>`;
    }else{
        document.getElementById("messageErrorImg").innerHTML = "";
    } //else

} //validationUrlImage

function validationPrice(){

    let itemPrice = document.getElementById("priceItem").value;

    if(itemPrice == ""){
        document.getElementById("messageErrorItemPrice").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce el precio del producto.<div>`;
    }else{
        document.getElementById("messageErrorItemPrice").innerHTML = "";
    } //else

} //validationPrice

function validationDesc(){

    let itemDesc = document.getElementById("descItem").value;

    if(itemDesc == ""){
        document.getElementById("messageErrorItemDesc").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce la descripcion del producto.<div>`;
    }else{
        document.getElementById("messageErrorItemDesc").innerHTML = "";
    } //else

} //validationDesc


function allValidations(){
    validationItemName();
    validationUrlImage();
    validationPrice();
    validationDesc();
} //allValidations



function getItem(){

    function ItemList(itemName, itemImg, itemPrice, itemDesc){
        this.itemName = itemName;
        this.itemImg = itemImg;
        this.itemPrice = itemPrice;
        this.itemDesc = itemDesc;
    } //ItemList

    // Obtenemos los datos del formulario
    var name = document.getElementById("itemName").value;
    var img = document.getElementById("itemImg").value;
    var price = document.getElementById("priceItem").value;
    var descripcion = document.getElementById("descItem").value;


    if(name.length>0 && img.length>0 && price.length>0 && descripcion.length>0){
        newItem = new ItemList(name, img, price, descripcion);
        
        addItemList();
    }else{
        // alert("Debe llenar todos los campos");
        swal("Debe llenar todos los campos",{
            icon: "error",
            button: false
        });
    }


        const addNewItem = {nombre: name, descripcion: descripcion, url_imagen: img, precio: price}

        fetch('/api/productos/', {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addNewItem),
            })
            .then((response) => response.text())
            .then((addNewItem) => {

                if(addNewItem == ""){
                    swal("Producto agregado",{
                        icon: "success",
                        button:false
                    })
                    setTimeout("redirectPage()", 2000); //Redirecciona la pagina en cierto tiempo / 1 seg = 1000mseg
                }

                // console.log("Success:", typeof(addNewUser));
                // console.log("probando" + addNewUser);

            })
            .catch((error) => {
                console.error("Error:", error);
                console.log("")
            });
                
            }else{
                // alert("Debe llenar todos los campos");
                swal("Debe llenar todos los campos",{
                    icon: "error",
                    button: false,
                    timer: 2000
                });
            }
}//getItem

function redirectPage(){
    window.location = "products copy.html";
} //redirectPage()

    /*
    if(name.length > 0 && img.length > 0 && price.length > 0 && descripcion.length > 0) {
        addItem({'name': name,
            'img': img,
            'price': price,
            'desc': descripcion
        });
    }else{
        alert("Debe llenar todos los campos")
    }
    */
}


var dataBase = [];

function addItemList(){
    swal("Producto agregado",{
        icon: "success",
        button: false
    });
    dataBase.push(newItem);
    console.log(dataBase);
    /*
    var dbJson = JSON.stringify(dataBase);
    localStorage.setItem('myArray', dbJson);
    console.log(dbJson);
    */
    document.getElementById("list-items").innerHTML += `
    <div class="col-lg-3" data-aos="fade-up" data-aos-duration="2000" style="padding-bottom: 25px;">
                <div class="card card-style jost border border-0">
                    <img src="${newItem.itemImg}" class="card-img-top"
                        alt="Fissure in Sandstone" />
                    <div class="card-body">
                        <h4 class="card-title text-justify"><b>${newItem.itemName}</b></h4>
                        <h5>$${newItem.itemPrice}</h5>
                        <p class="card-text text-justify">
                            ${newItem.itemDesc}
                        </p>
                    </div>
                    <div style="padding: 16px;">
                        <input type="number" id="name" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input jost" min="1" max="10" value="1"/>
                        <br>
                        <a href="#!" class="btn card-btn" style="width: 100%;">Agregar</a>
                    </div>
                </div>
            </div>
    `;
}




//Obtiene el valor de la cookies y lo muestra en pantalla
var getCookie = document.cookie;
if(userData !=  null){
    
    if(userData == "admin.one"){
        console.log("Son iguales");
        document.getElementById("buttomAdd").innerHTML = `
    <div class="fixed-bottom d-flex justify-content-end trnasparet-style" style="margin: 20px;">
        <button class="btn add-bottom-style" data-bs-toggle="modal" data-bs-target="#modalAddItems" >
            <span class="icon-plus-circle-dark"></span>
        </button>
    </div>`;
    }else{
        document.getElementById("buttomAdd").innerHTML = "";
    }
}else{
    // continue;
}

/*
if(getCookie.length > 0){
    if(nameCookie == "dataUser"){
        var onlyData = getCookie.slice(9);
        var getJson = JSON.parse(onlyData);
        console.log(getJson.email);
    }else{
        onsole.log("error");
    }
}else{
    
    // alert("No hay cookie");
}
*/


