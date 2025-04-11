
async function updateServerPlayers() {
  const serverId = '27349649'; // BattleMetrics Server ID
  const url = `https://api.battlemetrics.com/servers/${serverId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const players = data.data.attributes.players;

    const chernoElement = document.getElementById('server-online');
    if (chernoElement) {
      chernoElement.textContent = players;
    }
  } catch (e) {
    console.error('Помилка отримання даних з BattleMetrics:', e);
  }
}

updateServerPlayers();
setInterval(updateServerPlayers, 30000);
