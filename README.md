# Tic-Tac-Toe 🎮

A simple, responsive **Tic-Tac-Toe game** built with **React** and **Bootstrap**. Two players take turns placing X and O on a 3×3 board. The game detects wins and draws, keeps a move history, and lets players revisit earlier moves or start over.

## Features

- **Two-player gameplay:** Play locally with a friend as X and O.
- **Winner detection:** Identifies three matching marks in a row, column, or diagonal.
- **Draw detection:** Displays a draw when all squares are filled without a winner.
- **Turn indicator:** Shows which player moves next.
- **Move history:** Jump back to any previous move and continue playing from there.
- **Reset button:** Clear the board and move history to start a new game.
- **Responsive design:** Styled with Bootstrap and custom CSS.
- **Home and game pages:** Navigate between pages using React Router.

## Built With

- React (functional components and `useState`)
- React Router
- Bootstrap
- CSS
- JavaScript

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   ```

2. Open the project folder:

   ```bash
   cd YOUR_REPOSITORY
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

> Replace `YOUR_USERNAME` and `YOUR_REPOSITORY` with your GitHub details. The commands above assume your project uses Vite; if it uses a different setup, use the start script in your `package.json`.

## How to Play

1. Open the **Board** page or click **Play Game** on the home page.
2. Player **X** makes the first move. Players then take turns selecting empty squares.
3. The first player to place three matching marks horizontally, vertically, or diagonally wins.
4. If the board fills up without a winner, the game ends in a draw.
5. Use **Game History** to revisit previous moves, or **Reset** to start a new game.

## How It Works

The game uses React state to manage the move history and current move:

```jsx
const [history, setHistory] = useState([Array(9).fill(null)]);
const [currentMove, setCurrentMove] = useState(0);
```

The `Game` component manages state and passes the current board, turn, and event handlers to the `Board` component through props. `Board` renders nine `Square` components and checks for a winner or draw.

## Screenshots

Add screenshots of your home page and game board here once you've uploaded them to your repository.

<!-- Example:
![Home Page](screenshots/home.png)
![Game Board](screenshots/board.png)
-->

## Future Improvements

- Highlight the winning combination.
- Add a scoreboard for X and O.
- Add an option to play against the computer.
- Add sound effects and animations.

## License

This project is available for learning and personal use. Add a `LICENSE` file if you want to specify reuse permissions.
