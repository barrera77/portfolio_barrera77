//step 1: get DOM
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const carouselElement = document.querySelector(".carousel");
const sliderElement = carouselElement.querySelector(".carousel .list");
const thumbnailBorderElement = document.querySelector(".carousel .thumbnail");
const thumbnailItems = thumbnailBorderElement.querySelectorAll(".item");
const timeDom = document.querySelector(".carousel .time");

thumbnailBorderElement.appendChild(thumbnailItems[0]);
const timeRunning = 3000;
const timeAutoNext = 7000;

nextButton.addEventListener("click", () => {
  showSlider("next");
});

prevButton.addEventListener("click", () => {
  showSlider("prev");
});
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
});
function showSlider(type) {
  const sliderItems = sliderElement.querySelectorAll(".carousel .list .item");
  const thumbnailItems = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    sliderElement.appendChild(sliderItems[0]);
    thumbnailBorderElement.appendChild(thumbnailItems[0]);
    carouselElement.classList.add("next");
  } else {
    sliderElement.prepend(sliderItems[sliderItems.length - 1]);
    thumbnailBorderElement.prepend(thumbnailItems[thumbnailItems.length - 1]);
    carouselElement.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselElement.classList.remove("next");
    carouselElement.classList.remove("prev");
  }, timeRunning);
}
