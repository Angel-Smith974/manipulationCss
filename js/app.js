/*exo01
let element = document.querySelector(".cacher");
element.classList.remove('cacher');
*/

/*exo02
let element = document.querySelectorAll(".spoiler");
let boutonOn = document.querySelector("#btn01");
let boutonOff = document.querySelector("#btn02");

let on = boutonOn.onclick = function () {
    for (i = 0; i < element.length; i++) {
        element[i].classList.add('cacher');
    }
}


let off = boutonOff.onclick = function () {
    for (i = 0; i < element.length; i++) {
        element[i].classList.remove('cacher');
    }
}
*/
/*
//exo03
let element = document.querySelector("#second");
/*for (i = 0; i < element.length; i++) {
    element[i].style.backgroundColor = "yellow";
}*/
/*
for (let i in element){
    element[i].style.backgroundColor = "yellow";
}
*//*
element.onclick = function(){
    element.style.backgroundColor = "yellow";
}
*/


/*
//exo 03 suite

//variable pour selection par classe
let fruit = document.getElementsByClassName('fruit');
let legume = document.getElementsByClassName('legume');
let electro = document.getElementsByClassName('electro');
let dessert = document.getElementsByClassName('dessert');

//varibale pour selection par id
let dessertFruit = document.getElementById('df');
let dessertLegume = document.getElementById('dl');;

//variable des boutons
let btnAll = document.querySelector('#btnAll');
let btnFruit = document.querySelector('#btnFruit');
let btnLegume = document.querySelector('#btnLegume');
let btnElectro = document.querySelector('#btnElectro');
let btnDessert = document.querySelector('#btnDessert');

console.log(dessert);
btnChoix();
//replace();




//console.log(dessertFruit);

/*
function replace(){
    for (i = 0; i < dessertFruit.length; i++) {
        dessertFruit[i].classList.remove('cacher');
    }
}
*/

// function pour enlever la class .cacher=display : none;
/*function afficherTout(){
    for (i = 0; i < fruit.length; i++) {
        fruit[i].classList.remove('cacher');
        /*for (j = 0; j < dessertFruit.length; i++) {
            dessertFruit[j].classList.remove('cacher');
        }*/
/*  }
  for (j = 0; j < legume.length; j++) {
      legume[j].classList.remove('cacher');
  }
  for (k = 0; k < electro.length; k++) {
      electro[k].classList.remove('cacher');
  }
  for (x = 0; x < dessert.length; x++) {
      dessert[x].classList.remove('cacher');
  }
}

function cacherElement(element){

  for (i = 0; i < element.length; i++) {
      element[i].classList.add('cacher');
  }
  
}

function btnChoix() {

  btnAll.onclick = function () {
      //
      afficherTout();

  }
  // function pour cacher les legumes, electro et dessert
  btnFruit.onclick = function () {
      afficherTout();
      cacherElement(legume);
      cacherElement(electro);
      cacherElement(dessert);            
  }

  btnLegume.onclick = function () {
      afficherTout();
      cacherElement(fruit);
      cacherElement(electro);
      cacherElement(dessert);        
  }

  btnElectro.onclick = function () {
      afficherTout();
      cacherElement(fruit);
      cacherElement(legume);
      cacherElement(dessert);        
  }

  btnDessert.onclick = function () {
      afficherTout();
      cacherElement(fruit);
      cacherElement(legume);
      cacherElement(electro);        
  }
}
*/

//variable pour selection par classe
let fruit = document.getElementsByClassName('fruit');
let legume = document.getElementsByClassName('legume');
let electro = document.getElementsByClassName('electro');
let dessert = document.getElementsByClassName('dessert');
let produit = document.getElementsByClassName('produit');

//varibale pour selection par id
let dessertFruit = document.getElementById('df');
let dessertLegume = document.getElementById('dl');;

//variable des boutons
let btnAll = document.querySelector('#btnAll');
let btnFruit = document.querySelector('#btnFruit');
let btnLegume = document.querySelector('#btnLegume');
let btnElectro = document.querySelector('#btnElectro');
let btnDessert = document.querySelector('#btnDessert');


function afficherTout() {
    for (i = 0; i < produit.length; i++) {
        produit[i].classList.remove('cacher');
    }  
}

function cacherElement(element) {
    for (i = 0; i < element.length; i++) {
        element[i].classList.add('cacher');
    }
}




btnAll.addEventListener("click", () => {
    afficherTout();
});

btnFruit.addEventListener("click", ()=>{
    afficherTout();
    cacherElement(legume);
    cacherElement(electro);
    cacherElement(dessert);    
});
   
btnLegume.addEventListener("click", ()=>{
    afficherTout();
    cacherElement(fruit);
    cacherElement(electro);
    cacherElement(dessert);    
});

btnElectro.addEventListener("click", ()=>{
    afficherTout();
    cacherElement(fruit);
    cacherElement(legume);
    cacherElement(dessert);
           
});

btnDessert.addEventListener("click", ()=>{
    afficherTout();
    cacherElement(fruit);
    cacherElement(legume);
    cacherElement(electro);           
});