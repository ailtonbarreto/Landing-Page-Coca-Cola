
function menuShow(){
    let menuMobile = document.querySelector('.nav-mobile');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icon').src ="./IMG/menu-icon.png";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.menu-icon').src ="./IMG/cancel.png";
    }
}


let list = document.querySelectorAll(".item")

let next = document.getElementById("next")

let prev = document.getElementById("prev")

//contagem de itens na lista
let count = list.length //3


//item ativo
let active = 0


//acao botao next
next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count - 1 ? 0 : active + 1
    list[active].classList.add('active')
}


//acao botao prev
prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count - 1 : active - 1
    list[active].classList.add('active')
}


