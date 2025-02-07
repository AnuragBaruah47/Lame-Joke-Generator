const button=document.querySelector(".button")
const setup=document.querySelector(".setup")
const punchline=document.querySelector(".punchline")

button.addEventListener("click",async function(){
   try{
    const response= await fetch("https://official-joke-api.appspot.com/jokes/random")
    const data = await response.json()
    console.log(data.setup);
    setup.innerHTML=`<h1>${data.setup}</h1>`
    setTimeout(function(){
        punchline.innerHTML=`<h2>${data.punchline}</h2>`
    },3500)
     }catch(error){
        console.log("error",error);
     }

})