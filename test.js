import fetch from "node-fetch";

async function calculate() {
  fetch("https://www.motobikesworld.com/listing-category/speedboat/", {
    method: "GET",
    
  })
    .then((res) => console.log(res.data));
}

calculate();
