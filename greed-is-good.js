function score(dice) {
    const scores = {
        1: [{ number: 3, points: 1000 }, { number: 1, points: 100 }],
        2: [{ number: 3, points: 200 }],
        3: [{ number: 3, points: 300 }],
        4: [{ number: 3, points: 400 }],
        5: [{ number: 3, points: 500 }, { number: 1, points: 50 }],
        6: [{ number: 3, points: 600 }]
    }
    const diceRolls = {}
    let pointsTotal = 0
    dice.forEach(die => diceRolls[die] ? diceRolls[die]++ : diceRolls[die] = 1)
    for (let roll in diceRolls) {
        scores[roll].forEach(score => {
            for (let i = 0; i <= diceRolls[roll]; i++) {
                if (score.number <= diceRolls[roll]) {
                    pointsTotal += score.points
                    diceRolls[roll] -= score.number
                }
            }
        })
    }
    return pointsTotal
}

console.log(score([2, 3, 4, 6, 2])) // 0
console.log(score([4, 4, 4, 3, 3])) // 400
console.log(score([2, 4, 4, 5, 4])) // 450
console.log(score([5, 4, 4, 5, 4])) // 500


function score2 (dice) {
    const rolls = [0, 0, 0, 0, 0, 0]
    dice.forEach(die => rolls[die - 1]++)
    return rolls.reduce((total, roll, index) => {
        switch (index + 1) {
            case 1:
                return total + (Math.floor(roll / 3) * 1000) + ((roll % 3) * 100)
            case 5:
                return total + (Math.floor(roll / 3) * 500) + ((roll % 3) * 50)
            default:
                return total + (Math.floor(roll / 3) * (index + 1) * 100)
        }
    }, 0)
}

console.log(score2([2, 3, 4, 6, 2])) // 0
console.log(score2([4, 4, 4, 3, 3])) // 400
console.log(score2([2, 4, 4, 5, 4])) // 450
console.log(score2([5, 4, 4, 5, 4])) // 500