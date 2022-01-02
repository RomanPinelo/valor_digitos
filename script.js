/*******************************************************************************************
  El número tratado numéricamente
*******************************************************************************************/

var num = document.getElementById('numero');
var res = document.querySelector('#resultado');
var butB = document.getElementById('borrar');
var butM = document.getElementById('mostrar');

function calcDig(valor, digi) {
  let a = (Math.floor(valor / 10 ** digi)) % 10;
  return a;
}

// /* Insertando un párrafo en el body comentando el div#resultado en el archivo html*/
// butM.addEventListener('click', () => {
//   var val = Math.abs(num.value);
//   if (val <= 9) {
//     var p = document.createElement("p");
//     document.body.appendChild(p);
//     p.innerHTML = `El valor del digito es: ${val} `;
//   }
// });

/* Insertando parrafo dentro de un div#resultado y descomentandolo del archivo html*/
butM.addEventListener('click', () => {
  res.innerHTML = "";
  var val = Math.abs(num.value);
  if (val <= 9) {
    res.insertAdjacentHTML("beforeend", `<p>El valor del digito es: ${val}</p>`);
  } else if (val >= 10 && val <= 99) {
    for (let i = 0; i < 2; i++) {
      let digito = calcDig(val, i); 
      res.insertAdjacentHTML("beforeend", `<p>El valor del digito ${i + 1} es: ${digito}</p>`);
    }
  } else if (val >= 100 && val <= 999) {
    for (let i = 0; i < 3; i++) {
      let digito = calcDig(val, i); 
      res.insertAdjacentHTML("beforeend", `<p>El valor del digito ${i + 1} es: ${digito}</p>`);
    }
  } else if (val >= 1000 && val <= 9999) {
    for (let i = 0; i < 4; i++) {
      let digito = calcDig(val, i); 
      res.insertAdjacentHTML("beforeend", `<p>El valor del digito ${i + 1} es: ${digito}</p>`);
    }
  } else if (val >= 10000 && val <= 99999) {
    for (let i = 0; i < 5; i++) {
      let digito = calcDig(val, i); 
      res.insertAdjacentHTML("beforeend", `<p>El valor del digito ${i + 1} es: ${digito}</p>`);
    }
  } else if (val >= 100000 && val <= 999999) {
    for (let i = 0; i < 6; i++) {
      let digito = calcDig(val, i); 
      res.insertAdjacentHTML("beforeend", `<p>El valor del digito ${i + 1} es: ${digito}</p>`);
    }
  } else if (val >= 1000000 && val <= 9999999) {
    for (let i = 0; i < 7; i++) {
      let digito = calcDig(val, i); 
      res.insertAdjacentHTML("beforeend", `<p>El valor del digito ${i + 1} es: ${digito}</p>`);
    }
  } else {
    res.insertAdjacentHTML("beforeend", `<p>El número que intentas ingresar es demasiado grande<br>¡Vuelve a intentarlo!</p>`);
  }
});

butB.addEventListener('click', () => {
  num.value = '';
  res.innerHTML = "";
});




/*******************************************************************************************
  El número tratado con strings
*******************************************************************************************/
var num1 = document.getElementById('numero1');
var res1 = document.querySelector('#resultado1');
var butB1 = document.getElementById('borrar1');
var butM1 = document.getElementById('mostrar1');

/*
numero = parseInt(numero);  //Convierte un string en entero
*/

butM1.addEventListener('click', () => {
  res1.innerHTML = "";
  var val1 = Math.abs(num1.value);

  val1 = val1.toString().split("");
  let val2 = val1.length;
  
  if (val2 === 1) {
    res1.insertAdjacentHTML("beforeend", `<p>El valor del digito es: ${val1[0]}</p>`);
  } else if (val2 > 1 && val2 < 8) {
    for (let i = 0; i < val1.length; i++) {
      val2--;
      res1.insertAdjacentHTML("beforeend", `<p>El valor del digito ${i + 1} es: ${val1[val2]}</p>`);
    }
  } else {
    res1.insertAdjacentHTML("beforeend", `<p>El número que intentas ingresar es demasiado grande<br>¡Vuelve a intentarlo!</p>`);
  }
});

butB1.addEventListener('click', () => {
  num1.value = '';
  res1.innerHTML = "";
});