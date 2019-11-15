var dollar = document.querySelector(".topper__currency-btn-dollar");
var euro = document.querySelector(".topper__currency-btn-euro");
var pound = document.querySelector(".topper__currency-btn-pound");


dollar.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!dollar.classList.contains("topper__currency-btn--active")) {
    dollar.classList.add("topper__currency-btn--active");
    euro.classList.remove("topper__currency-btn--active");
    pound.classList.remove("topper__currency-btn--active");
  }
});

euro.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!euro.classList.contains("topper__currency-btn--active")) {
    euro.classList.add("topper__currency-btn--active");
    dollar.classList.remove("topper__currency-btn--active");
    pound.classList.remove("topper__currency-btn--active");
  }
});

pound.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!pound.classList.contains("topper__currency-btn--active")) {
    pound.classList.add("topper__currency-btn--active");
    dollar.classList.remove("topper__currency-btn--active");
    euro.classList.remove("topper__currency-btn--active");
  }
});
