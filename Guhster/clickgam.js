// Initialize score
    alert("Daily login bonus of 1000 received")
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
    
    }

    // Update the scoreboard
    function updateScore() {
      const scoreElement = document.getElementById('score');
      scoreElement.textContent = score;
    }
    function Exchange(){
      alert("oomb");
    }
