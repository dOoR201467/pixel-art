const grid = document.getElementById("pixel-grid");
const colorPicker = document.getElementById("colorPicker");
const clearButton = document.getElementById("clearButton");
const eraserButton = document.getElementById("eraser");
const eraserOffButton = document.getElementById("eraserOff");

// Create 400 pixels
for (let i = 0; i < 625; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    grid.appendChild(pixel);
}

let isDrawing = false;
let isErasing = false;

// Paint or erase a pixel
function paintPixel(pixel) {
    if (!pixel.classList.contains("pixel")) return;

    pixel.style.backgroundColor = isErasing
        ? "white"
        : colorPicker.value;
}

// Start drawing
grid.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;

    if (!event.target.classList.contains("pixel")) return;

    isDrawing = true;
    paintPixel(event.target);
});

// Draw while dragging
grid.addEventListener("pointerover", (event) => {
    if (isDrawing) {
        paintPixel(event.target);
    }
});

// Stop drawing when released
document.addEventListener("pointerup", () => {
    isDrawing = false;
});

document.addEventListener("pointercancel", () => {
    isDrawing = false;
});

// Clear the whole grid
clearButton.addEventListener("click", () => {
    document.querySelectorAll(".pixel").forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
});

// Turn eraser on
eraserButton.addEventListener("click", () => {
    isErasing = true;
});

// Turn eraser off
eraserOffButton.addEventListener("click", () => {
    isErasing = false;
});