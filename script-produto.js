
let list = document.querySelectorAll(".itemprod")

let next = document.getElementById("next1")

let prev = document.getElementById("prev1")


let count = list.length 



let activeprod = 0



next.onclick = () => {
    let activeOld1 = document.querySelector('.activeprod')
    activeOld1.classList.remove('activeprod')

    activeprod = activeprod >= count - 1 ? 0 : activeprod + 1
    list[activeprod].classList.add('activeprod')
}



prev.onclick = () => {
    let activeOld1 = document.querySelector('.activeprod')
    activeOld1.classList.remove('activeprod')

    activeprod = activeprod <= 0 ? count - 1 : activeprod - 1
    list[activeprod].classList.add('activeprod')
}

function menuShowprod(){
    let menuMobile = document.querySelector('.nav-mobile1');
    if (menuMobile.classList.contains('openprod')){
        menuMobile.classList.remove('openprod');
        document.querySelector('.menu-icon').src ="./IMG/menu-icon.png";
    } else{
        menuMobile.classList.add('openprod');
        document.querySelector('.menu-icon').src ="./IMG/cancel.png";
    }
}

