import { Link } from 'react-router-dom'

function Square({ value }) {

    return (
        <button
            className={`square ${value === "X" ? "x-square" : "o-square"}`}
        >
            {value}
        </button>
    )
}

function GameSelection() {
  return (
    <>
        <div className="container">
            <div className="row g-4 justify-content-center text-center mt-3">

                <h1>Select Category to Play</h1>
                {/* 3x3 */}
                <div className="col-md-4">
                    <Link to={`/game/${3}`} className='text-decoration-none'>
                        <div className="card h-100 border-1 shadow-sm text-center p-4">
                            
                            <div className="step-number mx-auto mb-3"> 3x3 </div>

                            <div className="board mx-auto">
                                <div className="board-row">
                                    <Square value="X" />
                                    <Square value="" />
                                    <Square value="O" />
                                </div>

                                <div className="board-row">
                                    <Square value="" />
                                    <Square value="X" />
                                    <Square value="" />
                                </div>

                                <div className="board-row">
                                    <Square value="O" />
                                    <Square value="" />
                                    <Square value="X" />
                                </div>
                            </div>

                            <div className="badge text-bg-primary mx-auto mb-3 mt-3 fw-bold fs-6 p-3"> Classic </div>

                            <h4 className="fw-bold">
                                Make 3 in a row.
                            </h4>

                        </div>
                    </Link>
                </div>

                {/* 4x4 */}
                <div className="col-md-4">
                    <Link to={`/game/${4}`} className='text-decoration-none'>
                        <div className="card h-100 border-1 shadow-sm text-center p-4">

                            <div className="step-number mx-auto mb-3"> 4x4 </div>


                            <div className="board mx-auto">
                                <div className="board-row">
                                    <Square value="X" />
                                    <Square value="" />
                                    <Square value="" />
                                    <Square value="O" />
                                </div>

                                <div className="board-row">
                                    <Square value="" />
                                    <Square value="X" />
                                    <Square value="" />
                                    <Square value="" />
                                </div>

                                <div className="board-row">
                                    <Square value="" />
                                    <Square value="O" />
                                    <Square value="X" />
                                    <Square value="" />
                                </div>

                                <div className="board-row">
                                    <Square value="O" />
                                    <Square value="" />
                                    <Square value="" />
                                    <Square value="X" />
                                </div>
                            </div>

                            <div className="badge text-bg-primary mx-auto mb-3 mt-3 fw-bold fs-6 p-3"> Modern </div>

                            <h4 className="fw-bold">
                                Make 4 in a row.
                            </h4>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default GameSelection
