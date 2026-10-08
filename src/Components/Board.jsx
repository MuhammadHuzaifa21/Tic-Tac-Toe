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
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}