/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  let userScore = Number(ctx.searchParams.userScore || 0); 
  let message = "";
  let computerScore = Number(ctx.searchParams.computerScore || 0);
  let userMove = 0;
  let computerMove = 0;
  let possibleMoves = [1, 2, 4, 6];
  let gameOver = false;

  
  if (ctx.searchParams.move) {
    computerMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    userMove = Number(ctx.searchParams.move);

    if (userMove === computerMove) {
      message = "Congratulations, computer is out!";
      gameOver = true;
    } else {
      computerScore += computerMove;
    }
  }

  if (gameOver) {
    return {
      image: (
        <div tw="flex flex-col bg-yellow-400 w-screen h-screen font-sans justify-center items-center">
          <p>{message}</p>
        </div>
      ),
      buttons: [
        <Button
          action="post"
          target={{ pathname: "/checkScore2", query: { computerScore } }}
        >
          Check Computer Score
        </Button>
      ],
    };
  }

  return {
    image: (
      <div tw="flex flex-col bg-blue-400 w-screen h-screen font-sans justify-center items-center">
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
