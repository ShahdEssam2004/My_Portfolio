let btnScroll=document.getElementById("btnScroll");

window.addEventListener("scroll",function(){
    if(scrollY >= 300)
    {
        btnScroll.style.display="block";
    }
    else
    {
        btnScroll.style.display="none";
    }
})
btnScroll.addEventListener("click",function(){
    scroll({
        top:0,
        behavior:"smooth",
    })
})