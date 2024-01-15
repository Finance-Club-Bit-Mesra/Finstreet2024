let scrollContainer=document.querySelector(".gallery");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
})
