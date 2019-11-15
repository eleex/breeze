var en = document.querySelector(".topper__lang-btn--en");
var fr = document.querySelector(".topper__lang-btn--fr");
var gm = document.querySelector(".topper__lang-btn--gm");


en.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!en.classList.contains("topper__lang-btn--active")) {
    en.classList.add("topper__lang-btn--active");
    fr.classList.remove("topper__lang-btn--active");
    gm.classList.remove("topper__lang-btn--active");
  }
});

fr.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!fr.classList.contains("topper__lang-btn--active")) {
    fr.classList.add("topper__lang-btn--active");
    en.classList.remove("topper__lang-btn--active");
    gm.classList.remove("topper__lang-btn--active");
  }
});

gm.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!gm.classList.contains("topper__lang-btn--active")) {
    gm.classList.add("topper__lang-btn--active");
    en.classList.remove("topper__lang-btn--active");
    fr.classList.remove("topper__lang-btn--active");
  }
});
