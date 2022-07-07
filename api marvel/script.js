const menuBtn = document.querySelector(".menu-icon span");
const seachBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");

menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  seachBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  seachBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
seachBtn.onclick = () => {
  form.classList.add("active");
  seachBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
