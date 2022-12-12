document.querySelector(".gallery-container")
.addEventListener("wheel", event => {
    if(event.deltay > 0){
        event.target.scroolBy(300, 0)
    } else{
        event.target.scroolBy(-300, 0)
    }
})