const overlay = document.querySelector(".overlay");
const popupWindow = document.querySelector(".popup-window");
const contactMeBtn = document.querySelector(".hero-info__btn");
const poppWindowCloseBtn = popupWindow.querySelector(".popup-window__btn");

function openPopupHandler() {
	popupWindow.classList.add("active");
	overlay.classList.add("active");
}

function closePopupHandler() {
	popupWindow.classList.remove("active");
	overlay.classList.remove("active");
}

contactMeBtn.addEventListener("click", openPopupHandler);
overlay.addEventListener("click", closePopupHandler);
poppWindowCloseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	closePopupHandler();
});
