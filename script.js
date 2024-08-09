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