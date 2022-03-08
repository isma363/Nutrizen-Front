//PEDES IN TERRA AD SIDERA VISUS



//funcion que recaba los datos y haces las operaciones

function calcularPlanes(  genero,                 // [string] ('masculino', 'femenino')
edad,                   // [number]
altura,                 // [number] (en centimetros)
peso,                   // [number] (en kilos)
nivelDeActividad,       // [string] ('sedentario', 'ligero', 'activo', 'muyActivo')
intensidadAlEjercitar,  // [string] ('ninguna', 'ligero', 'moderado', 'dificil', 'intenso')
ejercitarDiasPorSemana, // [number]
ejercitarMinutosPorDia  // [number]
) {
  console.log(  genero,                 // [string] ('masculino', 'femenino')
                            edad,                   // [number]
                            altura,                 // [number] (en centimetros)
                            peso,                   // [number] (en kilos)
                            nivelDeActividad,       // [string] ('sedentario', 'ligero', 'activo', 'muyActivo')
                            intensidadAlEjercitar,  // [string] ('ninguna', 'ligero', 'moderado', 'dificil', 'intenso')
                            ejercitarDiasPorSemana, // [number]
                            ejercitarMinutosPorDia  // [number]
                            )
var parametroNivelDeActividad = 1.25;
switch(nivelDeActividad) {
case 'sedentario':
parametroNivelDeActividad = 1.15;
break;
case 'ligero':
parametroNivelDeActividad = 1.25;
break;
case 'activo':
parametroNivelDeActividad = 1.35;
break;
case 'muyActivo':
parametroNivelDeActividad = 1.4;
break;
}

var parametroIntensidadAlEjercitar = 7.5;
switch(intensidadAlEjercitar) {
case 'ninguna':
parametroIntensidadAlEjercitar = 3;
break;
case 'ligero':
parametroIntensidadAlEjercitar = 5;
break;
case 'moderado':
parametroIntensidadAlEjercitar = 7.5;
break;
case 'dificil':
parametroIntensidadAlEjercitar = 10;
break;
case 'intenso':
parametroIntensidadAlEjercitar = 12;
break;
}

//BMR = Tasa metabolica basal
var BMR = genero == "masculino"  
? 5 + (10 * peso) + (6.25 * altura) - (5 * edad)
: -161 + (10 * peso) + (6.25 * altura) - (5 * edad);

var redondeadoBMR = Math.round(BMR);
var calculoActividadDiaria = parametroNivelDeActividad * redondeadoBMR;
var promedioCaloriasDiarias = (ejercitarDiasPorSemana * ejercitarMinutosPorDia * parametroIntensidadAlEjercitar) / 7;
var IMC =Math.round (peso/((altura/100)*(altura/100)));
var TDEE = Math.round(promedioCaloriasDiarias + calculoActividadDiaria); //TDEE = Gasto energetico diario


let r = {
IMC,
DEE: TDEE,
Planes: [
parseInt((TDEE * 0.85)/100) * 100,
Math.round((TDEE * 1.1)/100) * 100
]
}

console.log("TDEE", r.DEE)
console.log("planes 0", r.Planes[0])
console.log("planes 1", r.Planes[1])

let tdeeResult = document.getElementById('tdeeResult'); 
let bajarResult = document.getElementById('bajarResult');
let aumentarResult = document.getElementById('aumentarResult');

let imcResult= document.getElementById('ResultIMC')




tdeeResult.textContent = r.DEE + " Calorias"
bajarResult.textContent = r.Planes[0] + " Calorias"
aumentarResult.textContent = r.Planes[1] + " Calorias"
imcResult.textContent = r.IMC



} //calcularPlanes()







function getFormValues(){
let edad = document.getElementById('edad').value;
let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;
let genero = document.getElementById('genero').value;
let nivelDeActividad = document.getElementById('nivelDeActividad').value;
let intensidadAlEjercitar = parseInt(document.getElementById('intensidadAlEjercitar').value);
let ejercitarDiasPorSemana  = document.getElementById('ejercitarDiasPorSemana').value;
let ejercitarMinutosPorDia = document.getElementById('ejercitarMinutosPorDia').value;



  if(edad == ""){
    document.getElementById("messageErrorAge").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce la edad</div>`;
   }else if(edad >= 20 && edad <=105 ){
    document.getElementById("messageErrorAge").innerHTML = "";
   }else{
    document.getElementById("messageErrorAge").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce una edad valida rango de 20 a 105 años.</div>`;
   } //else
   if(altura == ""){
    document.getElementById("messageErrorheight").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce la altura</div>`;
   }else if(altura >= 120 && altura <=230 ){
    document.getElementById("messageErrorheight").innerHTML = "";
   }else{
    document.getElementById("messageErrorheight").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce una altura valida rango de 120 a 230 cm.</div>`;
   } //else
   if(peso == ""){
    document.getElementById("messageErrorweight").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce el peso</div>`;
   }else if(peso >= 30 && peso <=250 ){
    document.getElementById("messageErrorweight").innerHTML = "";
   }else{
    document.getElementById("messageErrorweight").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce un peso valido rango de 30 a 250kg .</div>`;
   } //else
   if(ejercitarDiasPorSemana == ""){
    document.getElementById("messageErrorDaysOfExercise").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce dias de la semana</div>`;
   }else if(ejercitarDiasPorSemana >= 1 && ejercitarDiasPorSemana <=7 ){
    document.getElementById("messageErrorDaysOfExercise").innerHTML = "";
   }else{
    document.getElementById("messageErrorDaysOfExercise").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce un dia valido rango de dias de la semana del 1 al 7 .</div>`;
   } //else
   if(ejercitarMinutosPorDia == ""){
    document.getElementById("messageErrorMinutesPerDay").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce minutos de ejercicio por dia</div>`;
   }else if(ejercitarMinutosPorDia >= 1 && ejercitarMinutosPorDia <=7 ){
    document.getElementById("messageErrorMinutesPerDay").innerHTML = "";
   }else{
    document.getElementById("messageErrorMinutesPerDay").innerHTML = `<div style="color: #FF6464;"><span class="icon-notification"></span> Introduce un numero valido de minutos rango de 1 al 180.</div>`;
   } //else

















var imc = peso / ((altura / 100) * (altura / 100));
if (imc < 18.5) {
  console.log("IMC " + imc.toFixed(2));
  window.addEventListener("load", milTrecientos());
} else if (imc >= 18.5 && imc < 25) {
  window.addEventListener("load", milSeiscientos());
} else if (imc > 25) {
  window.addEventListener("load", milNovecientos());
}

calcularPlanes(  genero,                 // [string] ('masculino', 'femenino')
 edad,                   // [number]
 altura,                 // [number] (en centimetros)
 peso,                   // [number] (en kilos)
 nivelDeActividad,
 intensidadAlEjercitar,
 ejercitarDiasPorSemana,
 ejercitarMinutosPorDia
 )

}


//Funcion que contiene e imprime el json del plan 1300
function milTrecientos(){
  fetch('../../assets/js/miltrescientos.json')
  .then((elementos) => elementos.json())
  .then(plan => {
      let text = "";

      for(let i = 0; i < (plan.length+1); i++){
          document.getElementById("dieta").innerHTML = text;
          (i < plan.length) ?
          text +=   `<div class="col-lg-3" data-aos="fade-up" data-aos-duration="2000" style="padding-bottom: 25px;">
          <div class="card card-style jost border border-0">
              <div style="background-color: #F7F7F7;">
                  <img src="${plan[i].img}" class="card-img-top" alt="${plan[i].name}"/>
              </div>
              <div class="card-body">
                  <h4 class="card-title text-justify"><b>${plan[i].title}</b></h4>
                  <h5>${plan[i].name}</h5>
                  <p class="card-text text-justify">${plan[i].desc}</p>
              </div>
          </div>
      </div>` : console.log("termina");
      }//for

  })
  .catch((err) => console.log(err));
}//milTrecientos

//Funcion que contiene e imprime el json del plan 1600
function milSeiscientos(){
  fetch('../../assets/js/milseiscientos.json')
  .then((elementos) => elementos.json())
  .then(plan => {
      let text = "";

      for(let i = 0; i < (plan.length+1); i++){
          document.getElementById("dieta").innerHTML = text;
          (i < plan.length) ?
          text +=   `<div class="col-lg-3" data-aos="fade-up" data-aos-duration="2000" style="padding-bottom: 25px;">
          <div class="card card-style jost border border-0">
              <div style="background-color: #F7F7F7;">
                  <img src="${plan[i].img}" class="card-img-top" alt="${plan[i].name}"/>
              </div>
              <div class="card-body">
                  <h4 class="card-title text-justify"><b>${plan[i].title}</b></h4>
                  <h5>${plan[i].name}</h5>
                  <p class="card-text text-justify">${plan[i].desc}</p>
              </div>
          </div>
      </div>`: console.log("termina");
      }//for

  })
  .catch((err) => console.log(err));
}//milSeiscientos

//Funcion que contiene e imprime el json del plan 1900
function milNovecientos(){
  fetch('../../assets/js/milnovecientos.json')
  .then((elementos) => elementos.json())
  .then(plan => {
      let text = "";

      for(let i = 0; i < (plan.length+1); i++){
          document.getElementById("dieta").innerHTML = text;
          (i < plan.length) ?
          text +=   `<div class="col-lg-3" data-aos="fade-up" data-aos-duration="2000" style="padding-bottom: 25px;">
          <div class="card card-style jost border border-0">
              <div style="background-color: #F7F7F7;">
                  <img src="${plan[i].img}" class="card-img-top" alt="${plan[i].name}"/>
              </div>
              <div class="card-body">
                  <h4 class="card-title text-justify"><b>${plan[i].title}</b></h4>
                  <h5>${plan[i].name}</h5>
                  <p class="card-text text-justify">${plan[i].desc}</p>
              </div>
          </div>
      </div>` : console.log("termina");
      }//for

  })
  .catch((err) => console.log(err));
}//milNovecientos

