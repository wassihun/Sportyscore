// Example: Fetch live football scores using an API
const fetchFootballScores = async () => {
  const apiKey = f04d7dee786a4e6fb66ec82bbf196ba7; // Replace with your API key
  const url = `https://api.football-data.org/v4/matches`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-Auth-Token': apiKey,
      },
    });
    const data = await response.json();
    console.log(data); // Display live scores in the console
  } catch (error) {
    console.error('Error fetching football scores:', error);
  }
};

fetchFootballScores();

// script.js
const FOOTBALL_API_KEY = f04d7dee786a4e6fb66ec82bbf196ba7; // Replace with your API key
const FOOTBALL_API_URL = 'https://api.football-data.org/v4/matches';

// Fetch live football scores
const fetchFootballScores = async () => {
  try {
    const response = await fetch(FOOTBALL_API_URL, {
      headers: {
        'X-Auth-Token': FOOTBALL_API_KEY,
      },
    });
    const data = await response.json();
    displayFootballScores(data.matches);
  } catch (error) {
    console.error('Error fetching football scores:', error);
  }
};

// Display football scores
const displayFootballScores = (matches) => {
  const scoresContainer = document.getElementById('football-scores');
  scoresContainer.innerHTML = '';

  matches.forEach((match) => {
    const scoreCard = document.createElement('div');
    scoreCard.className = 'score-card';
    scoreCard.innerHTML = `
      <p>${match.homeTeam.name} vs ${match.awayTeam.name}</p>
      <p>Score: ${match.score.fullTime.home} - ${match.score.fullTime.away}</p>
      <p>Status: ${match.status}</p>
    `;
    scoresContainer.appendChild(scoreCard);
  });
};

fetchFootballScores();
// Auto-refresh football scores every 5 minutes
setInterval(fetchFootballScores, 5 * 60 * 1000);

// Auto-refresh cricket scores every 5 minutes
setInterval(fetchCricketScores, 5 * 60 * 1000);