const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

		function carrossel() {
			idx++;

			if(idx > img.length - 1){
				idx = 0;
			}

		
			imgs.style.transform = `translateX(${-idx * 700}px)`;
		}

setInterval(carrossel, 3000);

let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})