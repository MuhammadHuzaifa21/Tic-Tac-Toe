import React from 'react'
import { Link } from 'react-router-dom'

function GameSelection() {
  return (
    <>
        <div className="row g-4 justify-content-center text-center mt-3">

            <h1>Select Category to Play</h1>
            {/* 3x3 */}
            <div className="col-md-4">
                <Link to="/game/3" className='text-decoration-none'>
                    <div className="card h-100 border-1 shadow-sm text-center p-4">

                        <div className="step-number mx-auto mb-3"> 3x3 </div>

                        <h4 className="fw-bold">
                            Make 3 in a row.
                        </h4>

                    </div>
                </Link>
            </div>

            {/* 4x4 */}
            <div className="col-md-4">
                <Link to="/game/4" className='text-decoration-none'>
                    <div className="card h-100 border-1 shadow-sm text-center p-4">

                        <div className="step-number mx-auto mb-3"> 4x4 </div>

                        <h4 className="fw-bold">
                            Make 4 in a row.
                        </h4>

                    </div>
                </Link>
            </div>
        </div>
      
    </>
  )
}

export default GameSelection
