document.addEventListener("DOMContentLoaded", function() {
    var storySentences = [
        "Our Lord...",
        "Let no Harm come our way.",
        "Make the skies burst forth with thunder",
        "Will Warm sunrays to make us whole.",
        " ",
        "We don't pray to those gods anymore.",
      "But the one prayer I know",
      "Is one asking for kindess",
      "يا لطيف",
      " ",
       "يا لطيف",
      " ",
       "يا لطيف",
      " ",
    ];
    var storyContainer = document.getElementById("story-text");
    var currentIndex = 0;

    function showNextSentence() {
        if (currentIndex < storySentences.length) {
            storyContainer.textContent = storySentences[currentIndex];
            currentIndex++;
            setTimeout(showNextSentence, 4000);
            
            storyContainer.style.fontSize = "20px";
            storyContainer.style.position = "absolute";
            storyContainer.style.top = "20%";
            storyContainer.style.left = "50%";
            storyContainer.style.transform = "translate(-50%, -50%)";
        } else {
            setTimeout(function() {
                window.location.href = "index.html";
            }, 5000);
        }
    }

    showNextSentence();
});

