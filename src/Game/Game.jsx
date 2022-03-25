import { useState } from "react"
import Board from "../Board/Board"
import calculateWinner from "../helpers"
import './Game.css'
import { Button } from 'antd';

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
        return <Button ghost className="startBtn" onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </Button>
    }


    return (
        <>
            <h1>ticTacToe</h1>

            <div>
                {renderMoves()}
                <h3>{winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? "X" : "O")}</h3>
            </div>

            <div className="marks">
                <Board squares={board} onClick={handleClick} />
            </div>
        </>
    )
}

export default Game