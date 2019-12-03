const navbarNav = document.getElementById('navbar-nav');
const logo = document.getElementById('logo');
const btnMenu = document.getElementById('btn-menu');
const btnMenuClose = document.getElementById('btn-menu-close');
const collapse = document.getElementById('collapse');
const bgChild = document.getElementById('bg-child');
const body = document.body;

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
bgChild.addEventListener('click', event => {
    asNavItiemChild.classList.remove('show');
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
