import { useState } from "react"
import Board from "../Board/Board"
import calculateWinner from "../helpers"


const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)



    const handleClick = (idx) => {
        const boardCopy = [...board]

        if (winner || boardCopy[idx]) return

        boardCopy[idx] = xIsNext ? "X" : "O"
        setBoard(boardCopy)
        setXisNext(!xIsNext)

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {
        return 

    }


    return (
        <>
            <h1>Tic Tac Toe Game </h1>

            <div>
                <p>{winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? "X" : "O")}</p>
                {renderMoves()}
            </div>

            <Board squares={board} onClick={handleClick} />
        </>
    )
}

export default Game