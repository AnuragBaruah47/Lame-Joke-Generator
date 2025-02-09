const button = document.querySelector(".button");
const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
const baseURL1 = "https://sv443.net/jokeapi/v2/joke/Any";
const baseURL2 = "https://v2.jokeapi.dev/joke/Dark";
const toggleButton=document.querySelector(".theme-checkbox")
const firstHalf=document.querySelector(".firsthalf")
const secondHalf=document.querySelector(".secondhalf")
console.log(toggleButton.checked);
toggleButton.addEventListener("click",function(){
  if (toggleButton.checked===true){
    firstHalf.style.filter="blur(10px)"
    secondHalf.style.filter="blur(0px)"
}else{
    secondHalf.style.filter="blur(10px)"
    firstHalf.style.filter="blur(0px)"
}
})
button.addEventListener("click", async function () {
if (toggleButton.checked===false){
  try {
    const response = await fetch(baseURL1);
    const data = await response.json();
    console.log(data.setup || data.joke);
    console.log(data.type)
    if (data.type === "single") {
      button.disabled = false;
      setup.innerHTML = `<h3>${data.joke}</h3>`
      punchline.innerHTML = `<h3></h3>`
    } else {
      setup.innerHTML = `<h3>${data.setup}</h3>`;
      button.disabled = true;
      setTimeout(function () {
        punchline.innerHTML = `<h3>${data.delivery}</h3>`;
        button.disabled = false;
      }, 3500);
      punchline.innerHTML = `<h3></h3>`;
    }
  } catch (error) {
    console.log("error", error);
  }}else{
    try {
      const response = await fetch(baseURL2);
      const data = await response.json();
      console.log(data.setup || data.joke);
      console.log(data.type)
      if (data.type === "single") {
        button.disabled = false;
        setup.innerHTML = `<h3>${data.joke}</h3>`
        punchline.innerHTML = `<h3></h3>`
      } else {
        setup.innerHTML = `<h3>${data.setup}</h3>`;
        button.disabled = true;
        setTimeout(function () {
          punchline.innerHTML = `<h3>${data.delivery}</h3>`;
          button.disabled = false;
        }, 3500);
        punchline.innerHTML = `<h3></h3>`;
      }
    } catch (error) {
      console.log("error", error);
    }
  }
});
