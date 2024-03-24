import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  let userScore = 0;
  let message = "";
  let computerScore = 0;
  let userMove = 0;
  let computerMove = 0;
  let possibleMoves = [1,2,4,6]
  let buttons = [
    <Button action="post" target={{ query: "1", pathname: "/game" }}>
      1
    </Button>,
    <Button action="post" target={{ query: "2", pathname: "/game" }}>
      2
    </Button>,
    <Button action="post" target={{ query: "4", pathname: "/game" }}>
      4
    </Button>,
    <Button action="post" target={{ query: "6", pathname: "/game" }}>
      6
    </Button>,
  ];

 
  
  if (ctx.searchParams.currentPlayer === "You") {
    buttons
  } else {
    buttons
  }

  return {
    image: (
        <span>score:{userScore} {message}</span>
    ),
    buttons: buttons,
  }
});

export const GET = handleRequest;
export const POST = handleRequest;
