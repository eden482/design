const burgerMenu = document.querySelector('#burgerMenu');
const menu = document.querySelector("#menu");
const links = document.querySelectorAll("#links");

burgerMenu.addEventListener("click",()=>{
    menu.classList.toggle('hidden');

})

links.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.toggle("hidden");
    })
})