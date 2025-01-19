const image = document.getElementById("jumpImage");
let yPosition = 100; // Initial y position
let velocity = 0; // Initial velocity
const gravity = 0.5; // Gravity constant
const jumpStrength = -10; // Jump strength

function updatePosition() {
  velocity += gravity; // Apply gravity
  yPosition += velocity; // Update y position based on velocity

  // Check if the image hits the ground
  if (yPosition >= 100) {
    yPosition = 100; // Reset position to ground level
    velocity = 0; // Reset velocity
  }

  // Update the image position
  image.style.top = yPosition + "px";
}

function jump() {
  velocity = jumpStrength; // Set velocity for jumping
}

// Add event listener for spacebar to trigger jump
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    jump();
  }
});

// Update position every frame
setInterval(updatePosition, 20);
