import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  let userScore = Number(ctx.searchParams.userScore || 0); // Initialize userScore from query params
  let message = "";
  let computerScore = Number(ctx.searchParams.computerScore || 0);
  let userMove = 0;
  let computerMove = 0;
  let possibleMoves = [1, 2, 4, 6];
  let gameOver = false;

  // Generate random computer move if user has bowled (submitted a move)
  if (ctx.searchParams.move) {
    computerMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    userMove = Number(ctx.searchParams.move);

    // Update computer's score based on user's move
    computerScore += computerMove;

    // Check if user is out (userMove and computerMove are same)
    if (userMove === computerMove) {
      message = "Congratulations, computer is out!";
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
      buttons: [
        <Button
          action="link"
          target={{ pathname: "/checkScore", query: { computerScore } }}
        >
          Check Computer Score
        </Button>
      ],
    };
  }

  return {
    image: (
      <div tw="flex flex-col">
        <p>Computer move: {computerMove}</p>
        <p>Computer score: {computerScore}</p>
        <p>{message}</p>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ query: { move: 1, computerScore}, pathname: "/userBowl" }}
      >
        1
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 2, computerScore}, pathname: "/userBowl" }}
      >
        2
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 4, computerScore}, pathname: "/userBowl" }}
      >
        4
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 6, computerScore}, pathname: "/userBowl" }}
      >
        6
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
