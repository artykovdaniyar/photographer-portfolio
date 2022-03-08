const overlay = document.querySelector(".overlay");
const popupWindow = document.querySelector(".popup-window");
const contactMeBtn = document.querySelector(".hero-info__btn");
const poppWindowCloseBtn = popupWindow.querySelector(".popup-window__btn");
const divWraper = document.querySelector(".wrapper");
import $ from "jquery";
import "magnific-popup";

if (window.innerWidth > 400) {
	$(".portfolio-gallery").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Loading image #%curr%...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">Close</button>',
		},
	});
} else if (window.innerWidth < 400) {
	const images = document.querySelectorAll(".portfolio-gallery");
	images.forEach((img) => {
		img.addEventListener("click", (e) => {
			e.preventDefault();
		});
	});
}

function openPopupHandler() {
	popupWindow.classList.add("active");
	overlay.classList.add("active");
	divWraper.classList.add("nonscroll");
}

function closePopupHandler() {
	popupWindow.classList.remove("active");
	overlay.classList.remove("active");
	divWraper.classList.remove("nonscroll");
}

contactMeBtn.addEventListener("click", openPopupHandler);
overlay.addEventListener("click", closePopupHandler);
poppWindowCloseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	closePopupHandler();
});
