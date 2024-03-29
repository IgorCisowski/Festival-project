// Burger Menu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const li = document.querySelectorAll("li");

const toggle = () => {
  menu.classList.toggle("menuActive");
  burger.classList.toggle("active");
  document.body.style.overflowY = "hidden";
};

const close = () => {
  menu.classList.remove("menuActive");
  burger.classList.remove("active");
  document.body.style.overflowY = "visible";
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
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// scroll Top arrow
const arrow = document.querySelector(".up");

window.addEventListener("scroll", () => {
  window.scrollY > 250
    ? arrow.classList.add("active")
    : arrow.classList.remove("active");
});

arrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
