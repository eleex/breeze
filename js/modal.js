var logIn = document.querySelector(".topper__log");
var popup = document.querySelector(".modal-login");
var reg = document.querySelector(".topper__reg");
var popupReg = document.querySelector(".modal-reg");


logIn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
});

reg.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupReg.classList.add("modal__show");
});

window.onclick = function(evt) {
    if (evt.target == popup || evt.target == popupReg) {
        popup.classList.remove("modal__show");
        popupReg.classList.remove("modal__show");
    };
};

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27) {
        if (popup.classList.contains("modal__show") || popupReg.classList.contains("modal__show")){
            evt.preventDefault();
            popup.classList.remove("modal__show");
            popupReg.classList.remove("modal__show");
        }
    }
});