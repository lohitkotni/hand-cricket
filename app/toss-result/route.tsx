import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  let result, buttons;

  if (randomNumber === ctx.pressedButton?.index) {
    result = "You won the toss";
    buttons = [
      <Button action="post" target={{ query: { choice: "batting" } }}>
        Batting
      </Button>,
      <Button action="post" target={{ query: { choice: "bowling" } }}>
        Bowling
      </Button>,
    ];
  } else {
    result = "You lost the toss";
    buttons = [
      <Button action="post" target={{ query: { choice: "continue" } }}>
        Continue
      </Button>,
    ];
  }

  return {
    image: <div>{result}</div>,
    buttons: buttons,
  };
});

export const GET = handleRequest;
export const POST = handleRequest;