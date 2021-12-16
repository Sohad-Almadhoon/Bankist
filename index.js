/*messege.style.width = "120%";
messege.style.backgroundColor = "#37483d";
messege.style.color = "#fff";
messege.style.height = Number.parseFloat(getComputedStyle(messege).height) + 30 + 'px';
document.documentElement.style.setProperty("--color-primary", "orangered");
let link = document.querySelector(".footer__link");
console.log(link.href)
console.log(link.getAttribute("href"))*/

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// OPEN MODAL
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".btn--show-modal");
const closeModal = document.querySelectorAll(".btn--close-modal");
openModal.forEach((el) => {
  el.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });
});
closeModal.forEach((el) => {
  el.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
});

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// Handler function
const nav = document.querySelector(".nav");
const handle = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest("nav").querySelectorAll(".nav__link");
    const logo = document.querySelector(".nav__logo");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handle.bind(0.5));
nav.addEventListener("mouseout", handle.bind(1));

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// Scroll
const section1 = document.querySelector("#section--1");
/*const cordinate = section1.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (this.window.scrollY > cordinate.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});*/

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

//Before Closing
/*window.addEventListener("beforeunload", function (e) {
     e.preventDefault();
    e.returnValue = "";
 })*/

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// color
let h1 = document.querySelector("h1");
h1.lastElementChild.style.color = "orangered";
h1.firstElementChild.style.color = "white";
h1.setAttribute("goal", "sohad");

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

//Creating & Inserting an element
const header = document.querySelector(".header");
/*const messege = document.createElement("div");
messege.classList.add("cookie-message");
messege.innerHTML =
  'we use cookies for improved functionality and analytics .<button class="btn btn--close-cookies"> Got it!</button> ';
header.after(messege);
messege
  .querySelector(".btn--close-cookies")
  .addEventListener("click", function () {
    messege.style.backgroundColor = "#111";
  });*/
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// Smooth Scroll
const btnScroll = document.querySelector(".btn--scroll-to");
btnScroll.addEventListener("click", function () {
  const cordnaites1 = section1.getBoundingClientRect();
  window.scrollTo({
    left: cordnaites1.left + window.scrollX,
    top: cordnaites1.top + window.scrollY,
    behavior: "smooth",
  });
  section1.scrollIntoView({ behavior: "smooth" });
});
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// Random Background color
/*const links = document.querySelectorAll(".nav__link");
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => 
   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
links.forEach(el => {
  el.addEventListener("click", function () {
    this.style.backgroundColor = randomColor();
  });
})
document.querySelector(".nav__links").addEventListener("click", function () {
  this.style.backgroundColor = randomColor();
});
document.querySelector(".nav").addEventListener("click", function () {
  this.style.backgroundColor = randomColor();
});*/

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
//Page Navigation =>smooth scroll
/*const links = document.querySelectorAll(".nav__link");
links.forEach(el => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
})*/
//Another solution
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
/////////////////////////////////////////////
/////////////////////////////////////////////
// Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length;
let curSlide = 0;
/////////////////////////////////////////////
//Go To Slide
const goToSlide = function (slide) {
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slide)}%`;
  });
};
/////////////////////////////////////////////
//Create the dots
const dots = document.querySelector(".dots");
const createDots = function () {
  slides.forEach((_, i) => {
    /*let dot = document.createElement("div");
  dot.classList.add("dots__dot");
  dots.appendChild(dot);
  dots.children[0].classList.add("dots__dot--active");*/
    // Solution
    dots.insertAdjacentHTML(
      "beforeend",
      `<button class='dots__dot' data-slide ="${i}"></button>`
    );
  });
};
//Making the dot active
const active = function (slide) {
  document.querySelectorAll(".dots__dot").forEach((el, i) => {
    el.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slide ="${slide}"]`)
    .classList.add("dots__dot--active");
};
/////////////////////////////////////////////
//Intilization
function init() {
  goToSlide(0);
  createDots();
  active(0);
}
init();
/////////////////////////////////////////////
/////////////////////////////////////////////
//Buttons
const sliderBtnLeft = document.querySelector(".slider__btn--left");
const sliderBtnRight = document.querySelector(".slider__btn--right");
const prevSlide = () => {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSlide(curSlide);
  active(curSlide);
};
const nextSlide = () => {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;
  goToSlide(curSlide);
  active(curSlide);
};
//Controlling By Keys
sliderBtnLeft.addEventListener("click", prevSlide);
sliderBtnRight.addEventListener("click", nextSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});
/////////////////////////////////////////////
/////////////////////////////////////////////
dots.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    active(slide);
  }
});
// Building a Tabbed Component
const tabContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const operationContent = document.querySelectorAll(".operations__content");
//Tabs
tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  tabs.forEach((el) => el.classList.remove("operations__tab--active"));
  operationContent.forEach((el) =>
    el.classList.remove("operations__content--active")
  );
  clicked.classList.add("operations__tab--active");
  //Operations Content
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
//Intersection Observer
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries; // if we have one observer
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const Observerheader = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // The apperance of the elemetnt
  rootMargin: `-${navHeight}px`, //margin before the sectoin
});
Observerheader.observe(header);
//Revealing Elements on scroll
const sections = document.querySelectorAll(".section");
const revealScroll = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const observerScroll = new IntersectionObserver(revealScroll, {
  root: null,
  threshold: 0.15,
});
sections.forEach((el) => {
  observerScroll.observe(el);
  el.classList.add("section--hidden");
});
//Lazy Load
  const imgs = document.querySelectorAll(".features__img ");
  const lazyload = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
  };
  const imgObserver = new IntersectionObserver(lazyload, {
    root: null,
    threshold: 0,
  });
  imgs.forEach((el) => {
    imgObserver.observe(el);
  });
