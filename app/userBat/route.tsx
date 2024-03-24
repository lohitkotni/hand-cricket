import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  let userScore = Number(ctx.searchParams.userScore || 0); // Initialize userScore from query params
  let message = "";
  let computerScore = 0;
  let userMove = 0;
  let computerMove = 0;
  let possibleMoves = [1, 2, 4, 6];
  let gameOver = false;

  // Generate random computer move
  computerMove =
    possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

  // Update user's move and score based on user input
  if (ctx.searchParams.move) {
    userMove = Number(ctx.searchParams.move);
    userScore += userMove;

    // Check if user's move is a valid cricket score (1, 2, 4, 6)
    if (![1, 2, 4, 6].includes(userMove)) {
      message = "Invalid move! Please select 1, 2, 4, or 6.";
      userScore -= userMove; // Revert invalid move
    }

    // Check if user is out (userMove and computerMove are same)
    if (userMove === computerMove) {
      message = "Out! Your move and computer's move match.";
      gameOver = true;
    }
  }
  if (gameOver) {
    return {
      image: (
        <div tw="flex flex-col">
          <p>{message}</p>
          
        </div>
      ),
      buttons: [<Button
        action="link"
        target={{ pathname: "/checkScore", query: { userScore } }}
      >
        Check Your Score
      </Button>],
    };
  }

  return {
    image: (
      <div tw="flex flex-col">
        <p>User move: {userMove}</p>
        <p>User score: {userScore}</p>
        <p>{message}</p> {/* Display error message or out message */}
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ query: { move: 1, userScore }, pathname: "/userBat" }}
      >
        1
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 2, userScore }, pathname: "/userBat" }}
      >
        2
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 4, userScore }, pathname: "/userBat" }}
      >
        4
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 6, userScore }, pathname: "/userBat" }}
      >
        6
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
