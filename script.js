const textElement = document.getElementById("typed-text");
const message = "Wishing you a very Happy Birthday! 🎂✨\nMay your day be as wonderful as you are.";
let index = 0;

function typeMessage() {
    if (index < message.length) {
        // This handles line breaks correctly in HTML
        if (message.charAt(index) === "\n") {
            textElement.innerHTML += "<br>";
        } else {
            textElement.innerHTML += message.charAt(index);
        }
        index++;
        setTimeout(typeMessage, 100); // 100ms per letter
    }
}

// Start typing after a short delay
window.onload = () => {
    setTimeout(typeMessage, 1000);
};
