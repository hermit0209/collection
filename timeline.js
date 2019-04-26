function isElementInViewport(e){
    let rect = e.getBoundingClientRect();
    return(
        rect.top >=0 &&
        rect.left >=-200 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) +200
    );
}

let items = document.querySelectorAll("h5");

function inView(){
    for(let i = 0; i < items.length; i++){
        if(isElementInViewport(items[i])){
            items[i].classList.add("in-view");
        }
    }
}

window.addEventListener("load", inView);
window.addEventListener("scroll", inView);
