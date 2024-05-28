document.addEventListener("DOMContentLoaded", function() {
    const sentences = [
        "An old Chechen folk song says:",
      " ",
    
      "Now that you are free to go home",
      "What will you be lugging in your bag?", 
       "What possessions are there in a foreign land?",
      "Nothing but your parent's bones", 
      "To inter in the homeland.",
      " ",
      
      "My Grandma didn't want to be buried in the cemetery we lived by.",
        "She felt like an outsider",
        "She feared the when the people of the graves would talk in their language",
        "She wouldn't understand",
      "She would be a stranger even in the dirt",
        " ",
      "When she passed",
        "She was buried somewhere else.",
        "With other strangers that don't speak her language.",
            "She was a stranger even in the dirt.",

        "Her other grave, the spot she saved next to my grandfather remains empty.",
        "On occupied land where she was never allowed to return."
    ];

    const paragraph = document.getElementById("animated-text");
    let index = 0;

    function displayNextSentence() {
        if (index < sentences.length) {
            paragraph.innerHTML += sentences[index] + "<br>"; 
            index++;
            setTimeout(displayNextSentence, 3000); 
        } else {
            
            const button = document.createElement("button");
            button.textContent = "Find The Grave";
            button.onclick = function() {
                window.location.href = "Grave.html"; 
            };
            paragraph.appendChild(button);
        }
    }

    displayNextSentence(); 
});
