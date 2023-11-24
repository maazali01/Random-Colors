const colors = [
    "#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#d35400", "#34495e"
];

function getRandomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let colorDisplay = document.getElementById("color-display");
    colorDisplay.style.backgroundColor = colors[randomIndex];
}
