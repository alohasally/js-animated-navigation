const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const naveItems = [nav1, nav2, nav3, nav4, nav5 ];

function navAnimation(dir1, dir2){
    naveItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${dir1}-${i + 1}`,`slide-${dir2}-${i+1}`)
    })
}

function toggleNav() {
    //Toggle : Menu Bars open / closed
    menuBars.classList.toggle('change');
    // Toggle : Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.replace('overlay-slide-left','overlay-slide-right')
        // overlay.classList.add('overlay-slide-right')
        // overlay.classList.remove('overlay-slide-left')
        
        // Animate In - Nav Items
        navAnimation('out','in');
        // overlay.classList.add('slide-in-1')
        // overlay.classList.remove('slide-out-1')
        // overlay.classList.add('slide-in-2')
        // overlay.classList.remove('slide-out-2')
    }else{
        overlay.classList.replace('overlay-slide-right','overlay-slide-left')
        // overlay.classList.add('overlay-slide-left')
        // overlay.classList.remove('overlay-slide-right')
         
        // Animate Out - Nav Items
          navAnimation('in', 'out');
        // overlay.classList.remove('slide-in-1')
        // overlay.classList.add('slide-out-1')
    }
}

//Event Listeners
menuBars.addEventListener('click', toggleNav);
naveItems.forEach((nav)=> {
    nav.addEventListener('click',toggleNav);
})
// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);
