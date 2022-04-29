const letterValues = require('./individualLetterScores.json');

export const determineTotalWordScore = word => {
    let scoreValue = 0;

    const letters = word.split('');
    for(let letter of letters){
        scoreValue += letterValues[letter];
    }

    return scoreValue;
}
