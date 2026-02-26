function findWinner(participants) {
    if (participants.length === 0) return null;
    
    let maxScore = participants[0].score;
    let winnerName = participants[0].name;
    
    for (let i = 1; i < participants.length; i++) {
        if (participants[i].score > maxScore) {
            maxScore = participants[i].score;
            winnerName = participants[i].name;
        }
    }
    
    return winnerName;
}

const participants = [
    { name: 'Анна', score: 85 },
    { name: 'Иван', score: 92 },
    { name: 'Мария', score: 78 },
    { name: 'Петр', score: 92 }
];

console.log(findWinner(participants)); 