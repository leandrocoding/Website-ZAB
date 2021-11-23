const navbarslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const elemtohide = document.querySelector(".carousel-container");


    burger.addEventListener("click", ()=> {
        nav.classList.toggle("nav-active");
    

    navLinks.forEach((link,index)=>{
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5+0.5}s`;
        }
        
    })

    burger.classList.toggle("toggle");
    elemtohide.classList.toggle("hideelem")

})



}






const otherstuff = ()=>{
    logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        window.location.href="/";
    } )
}


document.querySelector(".footfootleft").innerHTML = "© " + new Date().getFullYear() +" by ZAZZI Architektur und Baumanagement GmbH"

navbarslide();
otherstuff()