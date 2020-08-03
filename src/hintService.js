
function calculateHint(guess, target) {
    // create a local copy
    const secretCode = [...target];
    const userGuess = [...guess];

    let perfectMatch = 0;
    let colorMissplaced = 0;

    // check for pawns in right positions
    for (let i = 0; i < 4; i += 1) {
        if (userGuess[i] === secretCode[i]) {
            secretCode[i] = userGuess[i] = null;
            perfectMatch += 1;
        }
    }
    // check for pawns in wrong positions 
    for (let i = 0; i < 4; i += 1) {
        for (let x = 0; x < 4; x += 1) {
            if (userGuess[i] && secretCode[x]) {
                if (userGuess[i] === secretCode[x]) {
                    secretCode[x] = userGuess[i] = null;
                    colorMissplaced += 1;
                }
            }
        }
    }

        return [perfectMatch, colorMissplaced];

    }
    

    module.exports = calculateHint;