function determineExp(arr) {
    const totalExp = arr.reduce((accum, nextValue) => {
        return accum + nextValue.base_experience
    }, 0)
    return totalExp
}

function divideHands(pokemon) {
    const p1Hand = [];
    const p2Hand = [];

    for (let i = 0; i < pokemon.length; i++) {
        const randNum = Math.random()
        if (p1Hand.length < 4 && p2Hand.length < 4) {
            if (randNum < 0.5) p1Hand.push(pokemon[i])
            else { p2Hand.push(pokemon[i]) }
        } else if (p1Hand.length === 4) p2Hand.push(pokemon[i])
        else if (p2Hand.length === 4) p1Hand.push(pokemon[i])
    }
    return {p1: p1Hand, p2: p2Hand}
}

export { divideHands, determineExp };