import { useState } from "react"
import Board from "../Components/Board"

function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)

    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]

    function handlePlay(nextSquares) {

        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            nextSquares
        ]

        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    function resetGame() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    const moves = history.map((squares, move) => {

        let description

        
        if (move > 0) {
            description = "Go to move #" + move
        } else {
            description = "Go to game start"
        }

        return (
            <>
                <li key={move} className="mb-2">
                    <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => jumpTo(move)}
                    >
                        {description}
                    </button>
                </li>

                <button className="btn btn-outline-secondary btn-sm">
                    You are at move #{move + 1}
                </button>
            </>
        )
    })

    return (
        <div className="container py-5 text-center">
            <h1>Tic Tac Toe</h1>
            <div className="row justify-content-center align-items-start g-4 mb-4">
                <div className="col-md-auto">
                    <span class="btn badge text-bg-primary fs-5">3x3</span>
                </div>
            </div>

            <div className="row justify-content-center align-items-start g-4">

                {/* Game Board */}
                <div className="col-md-auto">
                    <Board
                        xIsNext={xIsNext}
                        squares={currentSquares}
                        onPlay={handlePlay}
                        onReset={resetGame}
                    />
                </div>

                {/* Game History */}
                <div className="col-md-auto">
                    <div className="game-info">
                        <h4 className="fw-bold mb-3">
                            Game History
                        </h4>
                        <ol className="ps-4">
                            {moves}
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Game