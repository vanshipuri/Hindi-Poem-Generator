function generatePoem(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    //alert("Generating your poem...");
new Typewriter("h3", {
  strings: `हरे भरे पेड़ों की छाँव में बसी है सुकून की बात,<br/> चिड़ियों की चहचहाहट में छिपा है प्रेम का अहसास।<br/>
हरे भरे खेतों में लहराता है जीवन का उत्सव,<br/>नदियों की कलकल में बहे हैं खुशियों के राग। <br/>
प्रकृति की हर साँस में छिपा है जीवन का जज़्बात।` ,
  autoStart: true,
  cursor: "",
  delay: 75
});


//let poeminputElement = document.getElementById("poemOutput");
//poeminputElement.innerHTML = ; 
}


let poemformElement = document.getElementById("poemForm");
poemformElement.addEventListener("submit", generatePoem);
