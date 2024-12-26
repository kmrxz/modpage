//asking name
const username = prompt("Name") || "nil";
document.getElementById('user').innerHTML = username;
function changeName(){
  const username = prompt("New name") || "nil";
  document.getElementById('user').innerHTML = username;
}
// Initialize score
//alert("Daily login bonus of 1000 received");
let score = 1000;

// Update score every second
setInterval(() => {
  score += 1;
  updateScore();
}, 1000);

// Click event for the main character
function mainCharacterClick() {      
  score += 1;
  updateScore();

  // Trigger the pop-up effect
  const scoreboard = document.querySelector('.scoreboard');
  scoreboard.classList.add('pop-up');

  // Remove the pop-up effect after 0.4s to reset the size
  setTimeout(() => {
    scoreboard.classList.remove('pop-up');
  }, 100); // The duration of the pop-up effect

  // Replace this section with your custom circle animation logic
  // animateCircles();
}

// Update the scoreboard
function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function Exchange(){
  alert("oomb"); 
}

// Removed the circle animation section (animateCircles function)

mainCharacterClick(); // Trigger initial animation on page load, if needed

// Remove blue square on image click
const img = document.querySelector('.ikkachi');
img.addEventListener('click', () => {
  img.style.outline = 'none'; 
});



//A space for text animation
const textElement = document.querySelector('#user');

function randomBlink() {
  const blackDelay = Math.random() *500; 
  const greenDelay = Math.random() *500;

  textElement.style.color = '#000000'; 
  setTimeout(() => {
    textElement.style.color = '#00ff00'; 
    setTimeout(() => {
      randomBlink(); 
    }, greenDelay);
  }, blackDelay);
}

randomBlink(); 
