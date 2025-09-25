const button = document.querySelector(".button");
const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");
const baseURL1 = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
const baseURL2 = "https://v2.jokeapi.dev/joke/Dark";
const toggleButton=document.querySelector(".toggle")
console.log(toggleButton.checked);

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
      console.log("Light Jokes");
    } else {
      setup.innerHTML = `<h3>${data.setup}</h3>`;
      button.disabled = true;
      console.log("Light Jokes");
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
      if (data.type === "single") {
        button.disabled = false;
        setup.innerHTML = `<h3>${data.joke}</h3>`
        punchline.innerHTML = `<h3></h3>`
        console.log("Dark Jokes");
      }else{
        setup.innerHTML = `<h3>${data.setup}</h3>`;
        button.disabled = true;
        console.log("Dark Jokes");
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
