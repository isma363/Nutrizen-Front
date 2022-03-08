const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
var carrito=[];

addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
  });

  const shoppingCartItemsContainer = document.querySelector('.ShoppingC');


  function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.card');

    
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('#priceT').textContent
  const itemImage = item.querySelector('.card-img-top').src;
  const itemAmount = item.querySelector('#name').value;
  const itemTotal = (itemAmount>1)?parseInt(itemPrice)* itemAmount:itemPrice;

      var product = {
          Nombre: itemTitle,
          Precio: itemPrice,
          Url_Imagen: itemImage,
          Cantidad: itemAmount
        };
        carrito.push({product})
  

sessionStorage.setItem('Carrito',JSON.stringify(carrito));

addItemToShoppingCart(itemTitle, itemImage,itemAmount,itemPrice);
}


function addItemToShoppingCart(itemTitle,itemImage,itemAmount,itemPrice) {
    const shoppingCartRow=document.createElement('div');
    const shoppingCartContent =  `
    <div class="row container shoppingCartItem">
    <div class="col-sm-3">
    <img src= ${itemImage} class="img-thumbnail" alt="" style="max-height: 80px;max-width: 80px;">
     </div>
     <div class="col-sm-3">
     <h5 class="card-title shoppingCartItemTitle" id="title" name="title">${itemTitle}</h5>
     </div>
     <div class= "col-sm-3" style="padding: 15px;">
        <input type="number" id="name" class="shoppingCartItemQuantity form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input jost" min="1" max="10" value=${itemAmount} name="name">
    </div>
    <div class="col-sm-2">
        <h6 id="PriceCart">$<b class="shoppingCartItemPrice">${itemPrice}</b></h6>
    </div>  
    <div class="col-sm-1">
    <button class="btn btn-danger buttonDelete" type="button">X</button>
    </div>  
    </div>`;

   shoppingCartRow.innerHTML = shoppingCartContent;
   shoppingCartItemsContainer.append(shoppingCartRow);
   
   shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `$${total.toFixed(2)}`;
}
var Producto = JSON.parse(sessionStorage.getItem("Carrito"));




  const options = {
    method: "GET"
  };
  
  // Petición HTTP
  fetch("/api/productos/", options)
    .then(response => response.json())
    .then(data => {

        console.log(data)


        let text = ""

        for(let i = 0; i < (data.length+1); i++){
            document.getElementById("list_items").innerHTML = text;
            text +=   `
            <div class="col-lg-3" data-aos="fade-up" data-aos-duration="2000" style="padding-bottom: 25px;">
                <div class="card card-style jost border border-0">
                    <img src="${data[i].url_imagen}" class="card-img-top" id="imgProduct"
                        alt="${data[i].nombre}" />
                    <div class="card-body">
                        <h4 class="card-price text-justify" id="price" name="price">$<b id="priceT">${data[i].precio}</b></h4>
                        <h5 class="card-title" id="title" name="title">${data[i].nombre}</h5>
                        <p class="card-text text-justify">
                            ${data[i].descripcion}
                        </p>
                    </div>
                    <div class= "amount" style="padding: 16px;">
                        <input type="number" id="name" class="form-control form-style form-style border border-0 border-bottom border-dark rounded-0 transparent-input jost" min="1" max="10" value="1" name="name"/>
                        <br>
                        <a href="#!" class="btn index-buttom-dos addToCart" style="width: 100%;" data-id="1">Agregar</a>
                    </div>
                </div>
            </div>`
        }//for

    })

function removeShoppingCartItem(event) {
  Producto = JSON.parse(sessionStorage.getItem("Carrito"));
  const buttonClicked = event.target;
  let n = buttonClicked.closest('.shoppingCartItem').getElementsByClassName('card-title')[0];
  if(Producto.length==1){
    Producto=[];
    sessionStorage.setItem('Carrito',JSON.stringify(Producto));
  }
  console.log(n.textContent);
  for (var i = 0; i< Producto.length;i++){
     if(Producto[i].product.Nombre == n.textContent){
      Producto.splice(i,1);
      sessionStorage.setItem('Carrito',JSON.stringify(Producto));
      break;
     }
  }
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
  //sessionStorage.removeItem('Carrito');
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}




function recuperardatos(){

if(shoppingCartItemsContainer.textContent != ''){

   extraer();
 }
}
   var nombre = "";
   var precio = "";
   var url= "";
   var cantidad="";
   
   
function extraer(){
   
   for (var i = 0; i< Producto.length;i++){
               
      nombre = Producto[i].product.Nombre;
      precio = Producto[i].product.Precio;
      url= Producto[i].product.Url_Imagen;
      cantidad=Producto[i].product.Cantidad;
   
    
   
       addItemToShoppingCart(nombre,url,cantidad,precio)
     }
    }
  
