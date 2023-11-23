import { slider } from "./assets/modules/slider.mjs";

slider(5000);

const stickyNavbar = () => {
  const header = document.getElementById("header");
  const sticky = header.offsetTop;
  const windowOffsetY = window.pageYOffset;
  if (windowOffsetY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const setTextPrefix = () => {
  const text = document.querySelectorAll(
    "main .content .content-main .card .card-body p"
  );
  prefixText(text);
};

const prefixText = (text) => {
  text.forEach((element) => {
    const textPrefix = element.innerText.substring(0, 50);
    element.innerHTML = `${textPrefix} <a href="#" class="read-blog">Read more...</a>`;
    console.log(textPrefix);
  });
};

setTextPrefix();

const setNavbar = () => {
  const menu = document.getElementById("menuBars");
  const navbar = document.getElementById("navbar");
  menu.onclick = () => {
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
  };
};

setNavbar();

const setViewContent = () => {
  const optionContent = document.querySelectorAll(
    ".content .content-header .navbar-list li"
  );
  optionContent.forEach((list) => {
    list.classList.remove("active");
    list.onclick = (e) => {
      optionContent.forEach((list) => {
        list.classList.remove("active");
      });
      list.classList.add("active");
    };
  });
  optionContent[1].classList.add("active");
};

setViewContent();

window.addEventListener("scroll", () => {
  stickyNavbar();
});
