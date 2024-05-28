document.addEventListener("DOMContentLoaded", function() {
    const sentences = [
        "Faces",
      " ",
    
      "Prayers",
    ];

    const paragraph = document.getElementById("animated-text");
    let index = 0;

    function displayNextSentence() {
        if (index < sentences.length) {
            paragraph.innerHTML += sentences[index] + "<br>"; 
            index++;
            setTimeout(displayNextSentence, 1000); 
      
        }
    }

    displayNextSentence(); 
});