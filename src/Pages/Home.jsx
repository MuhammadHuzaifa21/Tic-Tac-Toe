import { Link } from 'react-router-dom'
import '../css/Home.css'

function Home() {
    return (
        <div className="home-page">

            {/* Hero Section */}
            <section className="py-5 bg-light">
                <div className="container py-5">
                    <div className="row justify-content-center text-center">

                        <div className="col-lg-8">

                            <h1 className="display-3 fw-bold mb-3">
                                Welcome to <span className="text-primary">Tic-Tac-Toe</span>
                            </h1>

                            <p className="lead text-secondary mb-4">
                                A simple and fun game of X and O.
                                Challenge your friend and see who can get
                                three in a row first!
                            </p>

                            <Link
                                to="/select-game"
                                className="btn btn-primary btn-lg px-4"
                            >
                                Play Game
                            </Link>

                        </div>

                    </div>
                </div>
            </section>


            {/* How To Play */}
            <section className="py-5 bg-white">

                <div className="container py-4">

                    <div className="text-center mb-5">
                        <h2 className="fw-bold">
                            How to Play?
                        </h2>

                        <p className="text-secondary">
                            Follow these simple steps to start playing.
                        </p>
                    </div>


                    <div className="row g-4 justify-content-center">

                        {/* Step 1 */}
                        <div className="col-md-4">

                            <div className="card h-100 border-0 shadow-sm text-center p-4">

                                <div className="step-number mx-auto mb-3">
                                    1
                                </div>

                                <h4 className="fw-bold">
                                    Choose a Square
                                </h4>

                                <p className="text-secondary mb-0">
                                    Click on any empty square on the board
                                    to place your mark.
                                </p>

                            </div>

                        </div>


                        {/* Step 2 */}
                        <div className="col-md-4">

                            <div className="card h-100 border-0 shadow-sm text-center p-4">

                                <div className="step-number mx-auto mb-3">
                                    2
                                </div>

                                <h4 className="fw-bold">
                                    Take Turns
                                </h4>

                                <p className="text-secondary mb-0">
                                    Players take turns placing X and O
                                    on the board.
                                </p>

                            </div>

                        </div>


                        {/* Step 3 */}
                        <div className="col-md-4">

                            <div className="card h-100 border-0 shadow-sm text-center p-4">

                                <div className="step-number mx-auto mb-3">
                                    3
                                </div>

                                <h4 className="fw-bold">
                                    Get Three in a Row
                                </h4>

                                <p className="text-secondary mb-0">
                                    Get three of your marks in a row,
                                    column, or diagonal to win!
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Bottom CTA */}
            <section className="py-5 bg-primary text-white">

                <div className="container py-4">

                    <div className="row justify-content-center text-center">

                        <div className="col-lg-7">

                            <h2 className="fw-bold mb-3">
                                Ready to Play?
                            </h2>

                            <p className="mb-4 opacity-75">
                                Start a new game and see if you can become
                                the Tic-Tac-Toe champion!
                            </p>

                            <Link
                                to="/game"
                                className="btn btn-light btn-lg px-4"
                            >
                                Start Game
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Home