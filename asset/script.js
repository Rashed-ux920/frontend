/*=============== SHOW MENU ===============*/
const   navmenu = document.getElementById('nav__menu'),
        navtoggle = document.getElementById('nav-toggle'),
        navclose = document.getElementById('nav-close');

        // show menu 
if (navtoggle) {
    navtoggle.addEventListener('click', ()=>{
        navmenu.classList.add('show-menu')
    });
};



/*=============== REMOVE MENU MOBILE ===============*/
if (navclose) {
    navclose.addEventListener('click',()=>{
        navmenu.classList.remove('show-menu')
    });
};

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgheader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ?
    header.classList.add('bg-header'):
    header.classList.remove('bg-header')

}
widow.addEventListener(
    'scroll',
    bgheader
)
bgheader()


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/