document.getElementById("shoppingCart").innerHTML = `
<div class="offcanvas offcanvas-end canvas-style" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Carrito</h5>
    <a class="color-close" href="javascript:void(0);" data-bs-dismiss="offcanvas">
        <span class="icon-cross" style="font-size: 15px;"></span>
    </a>
</div>
<div class="row container">
    <div class="col-sm-3">
     <h6>Producto</h6>
     </div>
     <div class="col-sm-3">
     <h6></h6>
     </div>
     <div class= "col-sm-3">
     <h6>Cantidad</h6>
    </div>
    <div class="col-sm-2">
    <h6>Precio</h6>
    </div> 
    <div class="col-sm-1">
    </div> 
    </div>
<div class= "ShoppingC Container">
</div>

    <div class="row shopping-cart-total d-flex align-items-center container">
    <div class="col-sm-2">
         <h5>&nbsp&nbspTotal</h5>
    </div>
    <div class="col-sm-1">
        <p class="ml-2 mb-0 shoppingCartTotal">&nbsp&nbsp$</p>
    </div>
    <div class="row container">
    <div class="col-sm-12">
    <button class="btn comprarButton bottom-style" type="button" onclick='alerta();'>Comprar</button>
    </div>
    </div>
    </div>
    </div>
    
`;

var Producto = JSON.parse(sessionStorage.getItem("Carrito"));

function alerta(){
    Producto = JSON.parse(sessionStorage.getItem("Carrito"));
    if(Producto.length!=0){
        swal("Compra exitosa","gracias por tu compra",{
            icon: "success",
            button:false
        })
    }else{
        swal("Error","ingrese productos al carrito",{
            icon: "warning",
            button:false
        })
    }
}