import Square from "../Square/Square"
import './Board.css'

const Board = ({ squares, onClick }) => {

    return (
        <div className="board">
            {
                squares.map((square, idx) => {
                    return <Square key={idx} value={square} onClick={() => onClick(idx)} />
                }
                )

            }
        </div>
    )
}

export default Board