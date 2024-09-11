var images;

// Describe this function...
function load_image() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_img = document.getElementById('img');
  element_img.setAttribute("src", images[0]);
}


images = ['https://deih43ym53wif.cloudfront.net/large_johannesburg-south-africa-nelson-mandela-bridge-shutterstock_29445652.jpg_a2ebb8b66a.jpg', 'https://deih43ym53wif.cloudfront.net/large_Johannesburg-downtown-shutterstock_1677053197_a1f54ffa7e.jpeg', 'https://deih43ym53wif.cloudfront.net/large_johannesburg-near-maboneng-precinct-south-africa-shutterstock_1182726160_30036f60c3.jpeg'];
load_image();


document.getElementById('next').addEventListener('click', (event) => {
  images.push(images[0]);
  images.shift();
  load_image();

});

document.getElementById('prev').addEventListener('click', (event) => {
  images.unshift(images.slice(-1)[0]);
  images.pop();
  load_image();

});