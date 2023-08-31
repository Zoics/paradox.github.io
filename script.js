var model = document.querySelector(".model-container");
var submit = document.querySelector("#submit");
var out = document.querySelector(".btn-out");
if (submit) {
  submit.addEventListener("click", function () {
    model.style.visibility = "visible";
    console.log("tes");
  });
}
if (out) {
  out.addEventListener("click", function () {
    model.style.visibility = "hidden";
  });
}
