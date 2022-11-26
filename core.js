burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.navlist')

const sidebar = document.getElementById('sidebar');
const toggle = document.getElementById('toggle');

/*
burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})*/


document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle'){
        /*toggle.classList.remove('active');
        sidebar.classList.remove('active');*/
        navList.classList.toggle('v-class-resp');
        navbar.classList.toggle('h-nav-resp');
    }
}

navbartoggle.onclick = function(){
toggle.onclick.toggle('active');
sidebar.onclick.toggle('active')
}