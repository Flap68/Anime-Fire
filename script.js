const imgs = document.getElementsByClassName("animdestaque");
const img = document.querySelectorAll(".animdestaque img");

let idx = 0;

function carrossel()(
    idx++;
    
    if(idx > img.length -1){
        idx = 0;
    }

    imgs.styles.traansform = `translateX(${-idx * 500}px)`;
)

setInterval(carrossel, 1800);