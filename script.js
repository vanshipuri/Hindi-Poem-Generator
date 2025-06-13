function displayPoem(response) {

    new Typewriter("h3", {
  strings: response.data.answer, 
  autoStart: true,
  cursor: "",
  delay: 75
});

}

function generatePoem(event) {
    event.preventDefault(); // Prevent the form from submitting normally

let instructioninput = document.querySelector("#topicInput");
//Make call to api to generate poem
let apiKey = "b7oe38a4fa56t17674f3f0a7f3738e9e";
let prompt = `Generate a hindi poem about ${instructioninput.value}`;
let context = "You area romantic Poem expert, love to write short hindi poems.Your mission is to generate a 4 line poem with a good hindi words.Make sure to follow the user instructions i.e Prompt  and seperate each line by using <br/> tag in html";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);


axios.get(apiUrl).then(displayPoem);

    alert("Generating your poem...");

//let poeminputElement = document.getElementById("poemOutput");
//poeminputElement.innerHTML = ; 
}


let poemformElement = document.getElementById("poemForm");
poemformElement.addEventListener("submit", generatePoem);
