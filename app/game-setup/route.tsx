import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  let userScore = 0;
  let computerScore = 0;
  let currentPlayer = null;
  

  if (ctx.searchParams.choice === "batting") {
    currentPlayer = "You";
  } else if (ctx.searchParams.choice === "bowling") {
    currentPlayer = "computer";
  } else if (ctx.searchParams.choice === "continueBowl") {
    currentPlayer = "computer";
  } else {
    currentPlayer = "You";
  }

  return {
    image: (
      <div tw="bg-pink-200 w-screen h-screen flex justify-center items-center flex-col">
        <p>1st innings</p>
        <p>{currentPlayer} bat first</p>
      </div>
    ),
    buttons:[
        <Button action="post" target={{query:{currentPlayer}}}>Let's play</Button>
    ]
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
