const tbody = document.getElementById("leaderboardBody");
const filter = document.getElementById("gameFilter");

async function loadScores(gameType = "All") {

  let url = "http://localhost:5000/scores";

  if (gameType !== "All") {
    url += `?gameType=${gameType}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  tbody.innerHTML = "";

  data.forEach((score, index) => {

    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${score.playerName}</td>
        <td>${score.gameType}</td>
        <td>${score.score}</td>
      </tr>
    `;
  });
}

filter.addEventListener("change", () => {
  loadScores(filter.value);
});

loadScores();