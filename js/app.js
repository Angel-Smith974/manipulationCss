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