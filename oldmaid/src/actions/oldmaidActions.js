export const NEW_GAME = 'NEW_GAME'
export const RESET_SCORE = 'RESET_SCORE'
export const INCREASE_USER_WIN_SCORE = 'INCREASE_USER_WIN_SCORE'
export const INCREASE_COMPUTER_WIN_SCORE = 'INCREASE_COMPUTER_WIN_SCORE'
export const SETTLE_TURN = 'SETTLE_TURN'



export const newGame = () => {
    console.log("new game started now")
    return { type: NEW_GAME }
}

export const resetScore = () => {
    return { type: RESET_SCORE }
}

export const increaseUserWinScore = () => {
    return { type: INCREASE_USER_WIN_SCORE }
}

export const increaseComputerWinScore = () => {
    return { type: INCREASE_COMPUTER_WIN_SCORE }
}

export const settleTurn = (newHands) => {
    console.log("hands are being used to settle turn")
    return { type: SETTLE_TURN, payload: newHands}
}