// Burger Menu
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

// Countdown
let launchDate = new Date("Oct 1, 2023 00:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();
  let t = launchDate - now;

  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = "0" + days;
    }
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = "0" + hours;
    }
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) {
      mins = "0" + mins;
    }
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) {
      secs = "0" + secs;
    }
    let time = `${days} : ${hours} : ${mins} : ${secs}`;
    document.querySelector(".countdown").innerText = time;
  }
}

// sections scroll
document.querySelectorAll("nav a").forEach((el) => {
  el.addEventListener("click", function () {
    const goToSection = "#" + this.classList[0];
    if (goToSection === "#home") {
      scroll({
        top: document.querySelector(goToSection).scrollTop,
        behavior: "smooth",
      });
      return;
    }

    document.querySelector(goToSection).scrollIntoView({ behavior: "smooth" });
  });
});
