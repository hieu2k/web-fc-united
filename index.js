const navbarNav = document.getElementById('navbar-nav');
const logo = document.getElementById('logo');
const btnMenu = document.getElementById('btn-menu');
const btnMenuClose = document.getElementById('btn-menu-close');
const collapse = document.getElementById('collapse');
const bgChild = document.getElementById('bg-child');
const body = document.body;
const login = document.getElementById('login');
const btnLogin = document.getElementById('name-btn-login');

//click show menu item
let asNavItiemChild;
navbarNav.addEventListener('click', event => {
    let navItiemChild = event.toElement.nextElementSibling;
    console.log(event);
    if (navItiemChild) {
        navItiemChild.classList.toggle('show');
        if (asNavItiemChild && asNavItiemChild !== navItiemChild) {
            asNavItiemChild.classList.remove('show');
            bgChild.classList.remove('show');
            body.classList.remove('hidden')
        }
        asNavItiemChild = navItiemChild;
        bgChild.classList.toggle('show');
        body.classList.toggle('hidden')
    }
})

//click bg child hearder in menu
bgChild.addEventListener('click', event => {
    if (asNavItiemChild) {
        asNavItiemChild.classList.remove('show');   
    }
    login.classList.remove('show');
    bgChild.classList.remove('show');
})

//click show menu
btnMenu.addEventListener('click', event => {
    logo.classList.add('show');
    btnMenuClose.classList.add('show');
    btnMenuClose.classList.add('show');
    collapse.classList.add('show');
    btnMenu.classList.add('unshow');
})

//click of menu
btnMenuClose.addEventListener('click', event => {
    logo.classList.remove('show');
    btnMenuClose.classList.remove('show');
    btnMenuClose.classList.remove('show');
    collapse.classList.remove('show');
    btnMenu.classList.remove('unshow');
})

//btn login
btnLogin.addEventListener('click', event => {
    login.classList.toggle('show');
    bgChild.classList.toggle('show');
})