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

export default function Board({ xIsNext, squares, onPlay, onReset }) {

    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)) {
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

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(square => square !== null);

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
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>

                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>

                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
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

        {/* 4x4
        <div className="game-card" hidden={true}>
            <h1>Tic Tac Toe (4x4)</h1>

            <div className={`status ${
                winner ? "text-succes" :
                isDraw ? "text-warning" :
                "text-dark" 
            }`}>
                {status}
            </div>

            <div className="board">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                </div>

                <div className="board-row">
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                </div>

                <div className="board-row">
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                    <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
                    <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
                    <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
                </div>

                <div className="board-row">
                    <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
                    <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
                    <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
                    <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <button 
                    className="btn btn-primary px-4"
                    onClick={onReset}
                >
                    New Game
                </button>
            </div>
        </div> */}
    </div>


    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}