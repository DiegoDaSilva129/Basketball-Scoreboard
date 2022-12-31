// Initialize variables for home and away team scores
let homeScore = 0;
let awayScore = 0;

// Function to increase or decrease the score for a given team by a given amount
function updateScore(team, amount) {
  if (team === 'home') {
    if (homeScore + amount >= 0) {
      homeScore += amount;
      document.getElementById('home-score').innerHTML = homeScore;
    }
  } else if (team === 'away') {
    if (awayScore + amount >= 0) {
      awayScore += amount;
      document.getElementById('away-score').innerHTML = awayScore;
    }
  }
}
// Get the input fields and the "Save" button
const homeTeamNameInput = document.getElementById('home-team-name');
const awayTeamNameInput = document.getElementById('away-team-name');
const saveButton = document.getElementById('save-button');

// Add an event listener to the "Save" button
saveButton.addEventListener('click', () => {
  // Check if either of the team name input fields is blank
  if (homeTeamNameInput.value === '' || awayTeamNameInput.value === '') {
    // Do nothing if a team name is blank
    return;
  }
  // Update the team names
  document.getElementById('home-team').querySelector('h2').textContent = homeTeamNameInput.value;
  document.getElementById('away-team').querySelector('h2').textContent = awayTeamNameInput.value;
});
// Get the buttons for increasing and decreasing the scores
const homeScoreButtons = document.querySelectorAll('#home-team button');
const awayScoreButtons = document.querySelectorAll('#away-team button');

// Add event listeners to the buttons
homeScoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    updateScore('home', parseInt(button.textContent));
  });
});

awayScoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    updateScore('away', parseInt(button.textContent));
  });
});

// Get the "Restart Game" button
const restartButton = document.getElementById('restart-button');

// Add an event listener to the button
restartButton.addEventListener('click', () => {
  // Reset the scores
  homeScore = 0;
  awayScore = 0;
  document.getElementById('home-score').innerHTML = homeScore;
  document.getElementById('away-score').innerHTML = awayScore;

  // Reset the team names
  document.getElementById('home-team').querySelector('h2').textContent = 'Home';
  document.getElementById('away-team').querySelector('h2').textContent = 'Away';

  // Clear the team name input fields
  document.getElementById('home-team-name').value = '';
  document.getElementById('away-team-name').value = '';
});