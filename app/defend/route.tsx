/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  let userScore = Number(ctx.searchParams.userScore || 0);
  let userMove = 0;
  let message = "";
  let computerMove = 0;
  let possibleMoves = [1, 2, 4, 6];
  let gameOver = false;
  let computerScore = Number(ctx.searchParams.computerScore || 0);

  
  if (ctx.searchParams.move) {
    userMove = Number(ctx.searchParams.move);
    computerMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    if (userMove === computerMove) {
      message = "You Won";
      gameOver = true;
    } else {
      computerScore += computerMove;
      if (computerScore > userScore) {
        message = "You lost the match";
        gameOver = true;
      }
    }

    
  }

  if (gameOver) {
    return {
      image: (
        <div tw="flex flex-col bg-yellow-400 w-screen h-screen font-sans justify-center items-center">
          <p>{message}</p>
        </div>
      ),
    };
  }

  return {
    image: (
      <div tw="flex flex-col bg-blue-400 w-screen h-screen font-sans justify-center items-center">
        <p>computer Move: {computerMove}</p>
        <p>computer Score: {computerScore}</p>
        <p>Defend: {userScore + 1}</p>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ query: { move: 1, userScore, computerScore }, pathname: "/defend" }}
      >
        1
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 2, userScore, computerScore }, pathname: "/defend" }}
      >
        2
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 4, userScore, computerScore }, pathname: "/defend" }}
      >
        4
      </Button>,
      <Button
        action="post"
        target={{ query: { move: 6, userScore, computerScore }, pathname: "/defend" }}
      >
        6
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
