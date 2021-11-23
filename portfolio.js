const expandableHandler = ()=>{
    const baseCards = document.querySelectorAll(".isexpandable");
    const extensionCards = document.querySelectorAll(".extension");

    baseCards.forEach((baseCard,index) => {
        baseCard.addEventListener("click", ()=>{
            extensionCards[index].classList.toggle("hidden");
            // extensionCards[index].classList.toggle("nongray");
            extensionCards[index].classList.toggle("grayify");
            baseCard.classList.toggle("grayify");
            // extensionCards[index].style.
            // console.log(index)
        });
        dotdotdot = document.createElement("div");
        dotdotdot.innerHTML = "..."
        dotdotdot.classList.toggle("dotdotdotclass");
        baseCard.appendChild(dotdotdot);
        
    });


}

let slideIndex = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const altslideshowhandle = ()=>{
    const baseCards = document.querySelectorAll(".isexpandable");
    


    baseCards.forEach((baseCard,index) => {
       
        
        baseCard.onclick = ()=>{
            const images = baseCard.querySelectorAll("img");
            console.log(images)
            const imglenght = images.length;
            
            const nextImage = ()=>{
                if(slideIndex[index]+1<imglenght){
                    slideIndex[index]++;
                    // console.log(slideIndex[index])

                }else{
                    slideIndex[index]=0;
                    // console.log(imglenght)
                }
            }
            nextImage();
            const  sInd = slideIndex[index];
            for (let i = 0; i < imglenght; i++) {
                
                images[i].classList.add("hidden");               
            }
            images[sInd].classList.remove("hidden");
            // console.log(images[sInd]);
            // console.log(images);
            
            
        };
        
        dotdotdot = document.createElement("div");
        dotdotdot.innerHTML = "..."
        dotdotdot.classList.toggle("dotdotdotclass");
        baseCard.appendChild(dotdotdot);
        
    });
}



// expandableHandler();

altslideshowhandle();