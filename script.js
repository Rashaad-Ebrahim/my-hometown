var images;

// Describe this function...
function load_image() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_img = document.getElementById("img");
  element_img.setAttribute("src", images[0]);
}

images = [
  "/images/carousel/carousel01.jpg",
  "/images/carousel/carousel02.jpg",
  "/images/carousel/carousel03.jpg",
  "/images/carousel/carousel04.jpg",
  "/images/carousel/carousel05.jpg",
  "/images/carousel/carousel06.jpg",
];
load_image();

document.getElementById("next").addEventListener("click", (event) => {
  images.push(images[0]);
  images.shift();
  load_image();
});

document.getElementById("prev").addEventListener("click", (event) => {
  images.unshift(images.slice(-1)[0]);
  images.pop();
  load_image();
});
