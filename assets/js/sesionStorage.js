
var Producto = JSON.parse(sessionStorage.getItem("Carrito"));
var shoppingCartItemsContainer = document.querySelector('.ShoppingC');
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
    </div>`;

   shoppingCartRow.innerHTML = shoppingCartContent;
   shoppingCartItemsContainer.append(shoppingCartRow);
 
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

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}