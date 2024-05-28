document.addEventListener("DOMContentLoaded", function() {
    var storySentences = [
        "I was told a story of three brothers",
        "Fleeing Chechnya, heading south",
        "Three brothers named after three angels",
        "Azrael, Gabriel, & Raphael",
        "عزرائيل, جبرائيل, و اسرافيل",
        "angels don't roam the earth anymore.",
        "One made it to the Golan Heights, one made it to Palestine, and one made it back",
        "They sent letters, so did their kids",
        "there are no such letters anymore.",
        "Rafael, had a kid in the Golan Heights, in حفر.",
        "There is no such village anymore.",
        "The kid had a name: عمر",
        "he lived and died, he was my grandfather",
        "There is no such grave anymore."
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
