const players = [
  {
    id: 1,
    name: 'Ivan',
    scorePoints: 4500,
  },
  {
    id: 2,
    name: 'Petr',
    scorePoints: 3600,
  },
  {
    id: 3,
    name: 'Vadim',
    scorePoints: 3433,
  },
  {
    id: 4,
    name: 'Olga',
    scorePoints: 2356,
  },
]

//create an empty array to store the scores
let scores = []

// fill the scores array with scorePoints values from the players array; player is each object here
for (let player of players) {
  scores.push(player.scorePoints)
}

console.log(scores) //verify that the new array scores is fiiled with the values of scorPoints

// find the maximum score using Math.max and the spread operator
let maxScore = Math.max(...scores)

// find the player with the maximum value in scorePoints proparty
for (let player of players) {
  if (player.scorePoints === maxScore) {
    console.log('Player with the maximum scorePoints:')
    console.log(player)
  }
}
