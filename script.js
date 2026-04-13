// --- HEART TREE DRAWING LOGIC ---
const canvas = document.createElement('canvas');
const container = document.getElementById('tree-container');
canvas.width = 600; 
canvas.height = 500;
container.appendChild(canvas);
const ctx = canvas.getContext('2d');

function drawHeart(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size, x - size, y - size, x - size, y);
    ctx.bezierCurveTo(x - size, y + size, x, y + size, x, y + (size * 2));
    ctx.bezierCurveTo(x, y + size, x + size, y + size, x + size, y);
    ctx.bezierCurveTo(x + size, y - size, x, y - size, x, y);
    ctx.fill();
}

// Function to draw the "Tree" (Simplified)
function growTree() {
    // Draw the trunk
    ctx.strokeStyle = '#5d4037';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 500);
    ctx.lineTo(300, 300);
    ctx.stroke();

    // Draw some hearts as leaves
    drawHeart(300, 250, 15, "#ff4d6d"); // Center
    drawHeart(270, 280, 10, "#ff758f"); // Left branch
    drawHeart(330, 280, 10, "#ff758f"); // Right branch
}
const textElement = document.getElementById("typed-text");
const message = "Wishing you a very Happy Birthday! 🎂✨\nMay your day be as wonderful as you are .";
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
