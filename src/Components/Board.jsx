import '../css/Board.css'

function Square({ value, onSquareClick }) {

    return (
        <button
            className={`square ${value === "X" ? "x-square" : "o-square"}`}
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}

export default function Board({ xIsNext, squares, onPlay, onReset, size }) {

    // LOGIC
    function handleClick(i) {
        if(squares[i] || calculateWinner(squares, size)) {
            return;
        } 

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares, size);
    const isDraw = !winner && squares.every(square => square !== null);

    // UI
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else if (isDraw) {
        status = "It's a Draw!";
    } else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

  return (
    <>
    <div className="game-container">

        {/* 3x3 */}
        <div className="game-card">

            <div className={`status ${
                winner ? "text-succes" :
                isDraw ? "text-warning" :
                "text-dark" 
            }`}>
                {status}
            </div>

            <div className="board">
                {/* DYNAMIC ROWS BASED ON SIZE */}
                {Array.from({ length: size }).map((_, row) => {
                    return (  // returns ROW                                   
                        <div className="board-row" key={row}>
                            {Array.from({ length: size }).map((_, column) => {
                                const index = (row * size) + column; // Calculation for Square indexes
                                return ( // returns COLUMN
                                    <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>

            <div className="d-flex justify-content-center mt-4">
                <button 
                    className="btn btn-primary px-4"
                    onClick={onReset}
                >
                    New Game
                </button>
            </div>
        </div>        
    </div>


    </>
  )
}

function calculateWinner(squares, size) {
    const lines = [];

    for (let row = 0; row < size; row++) {
        const line = [];

        for (let column = 0; column < size; column++) {
            const index = column + (row * size);

            line.push(index);
        }

        lines.push(line);
    }

    // Vertical lines
    for (let column = 0; column < size; column++) {
        const line = [];

        for (let row = 0; row < size; row++) {
            const index = column + (row * size);
            line.push(index);
        }

        lines.push(line);
    }

    // Main diagonal
    const diagonal1 = [];

    for (let i = 0; i < size; i++) {
        diagonal1.push(i * (size + 1));
    }

    lines.push(diagonal1);

    // Other diagonal
    const diagonal2 = [];

    for (let i = 0; i < size; i++) {
        diagonal2.push((i + 1) * (size - 1));
    }

    lines.push(diagonal2);

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const first = squares[line[0]];

        if (
            first &&
            line.every(index => squares[index] === first)
        ) {
            return first;
        }
    }

    return null;
}