function calculatePassingScore(player) {
  const touchdowns = player.stats.passing.touchdowns * 6
  const interceptions = player.stats.passing.interceptions * -3
  const yards = player.stats.passing.yards / 25

  return touchdowns + interceptions + yards
}

function calculateRushingScore(player) {
  const yards = player.stats.rushing.yards / 10
  const touchdowns = player.stats.rushing.touchdowns * 6
  const fumbles = player.stats.rushing.fumbles * -3
  return yards + touchdowns + fumbles
}

function calculateReceivingScore(player) {
  const receptions = player.stats.receiving.receptions
  const yards = player.stats.receiving.yards / 10
  const touchdowns = player.stats.receiving.touchdowns * 6
  return receptions + yards + touchdowns

}

function calculateReturnScore(player) {
  const kickYards = player.stats.return.kickreturn.yards / 15
  const kickTouchdowns = player.stats.return.kickreturn.touchdowns * 6
  const kickFumbles = player.stats.return.kickreturn.fumbles * -3
  const puntYards = player.stats.return.puntreturn.yards / 15
  const puntTouchdowns = player.stats.return.puntreturn.touchdowns * 6
  const puntFumbles = player.stats.return.puntreturn.fumbles * -3
  return kickYards + kickTouchdowns + kickFumbles + puntYards + puntFumbles + puntTouchdowns
}

function calculateScore(player) {
  switch (player.position) {
    case 'QB':
      return calculatePassingScore(player) + calculateRushingScore(player)
    case 'RB':
    case 'WR':
      return calculateRushingScore(player) + calculateReceivingScore(player) + calculateReturnScore(player)
    case 'TE':
      return calculateReceivingScore(player)
    default:
      return 0
  }
}

module.exports = calculateScore