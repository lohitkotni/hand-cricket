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


  computerMove =
    possibleMoves[Math.floor(Math.random() * possibleMoves.length)];


  if (ctx.searchParams.move) {
    userMove = Number(ctx.searchParams.move);

    if (userMove === computerMove) {
      message = "Out! Your move and computer's move match.";
      gameOver = true;
    }else {
      userScore += userMove;
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
        action="post"
        target={{ pathname: "/checkScore1", query: { userScore } }}
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
        <p>{message}</p>
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
