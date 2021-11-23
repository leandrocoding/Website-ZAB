const carousel = () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");

    // Buttons
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    nextSlide = () =>{
        
        if(counter>= carouselImages.length -1 ) {return}
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = "translateX("+ (-size*counter)+"px)";
    

};
    // Ccunter = 1
    let counter = 1;
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Buttons

    nextBtn.addEventListener("click",nextSlide);
    // nextBtn.addEventListener("click",()=>{
    //     console.log("Hey");
    // });

    prevBtn.addEventListener("click", ()=>{
        if(counter <=0){return}
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = "translateX("+ (-size*counter)+"px)";
    });



    carouselSlide.addEventListener("transitionend", ()=>{
        if (carouselImages[counter].id === "lastClone"){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length -2;
            carouselSlide.style.transform = "translateX("+ (-size*counter)+"px)";

        }
        if (carouselImages[counter].id === "firstClone"){
            carouselSlide.style.transition = "none";
            counter = 1;
            carouselSlide.style.transform = "translateX("+ (-size*counter)+"px)";

        }
    })




    window.addEventListener('resize', () => {
        carouselSlide.style.transition = "none";
        size = carouselImages[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    window.addEventListener('load', () => {
        carouselSlide.style.transition = "none";
        size = carouselImages[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
    
    setInterval(nextSlide,10000);


}
carousel();