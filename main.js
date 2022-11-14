const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const li = document.querySelectorAll("li");

const toggle = () => {
  menu.classList.toggle("menuActive");
  burger.classList.toggle("active");
};

const close = () => {
  menu.classList.remove("menuActive");
  burger.classList.remove("active");
};

li.forEach((li) => {
  li.addEventListener("click", close);
});

burger.addEventListener("click", toggle);
