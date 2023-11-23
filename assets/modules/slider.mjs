export const slider = (duration) => {
  const sliderItem = document.getElementsByClassName("slider-slide");
  const sliderItemArray = [...sliderItem];
  setSlider(sliderItemArray);
  showSlide(sliderItemArray, duration);
};

const showSlide = (sliderItem, duration) => {
  let slideIndex = 0;
  setInterval(() => {
    slideIndex++;
    sliderItem.map((item, index) => {
      item.classList.remove("active");
      if (index <= slideIndex)
        item.style.transform = `translateX(-${(index + 1) * 100}%)`;
      if (index === slideIndex) {
        item.classList.add("active");
        item.style.transform = "translateX(0%)";
      }
    });
    if (slideIndex > sliderItem.length - 1) {
      slideIndex = 0;
      setSlider(sliderItem);
    }
  }, duration);
};

const setSlider = (sliderItemArray) => {
  sliderItemArray.map((item, index) => {
    if (index === 0) item.classList.add("active");
    item.style.transform = `translateX(${index * 100}%)`;
  });
};
