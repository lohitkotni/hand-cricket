import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  const computerChoice = Math.floor(Math.random() * 2);
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
    result = `You lost the toss and computer chose to ${
      computerChoice === 0 ? "bat" : "bowl"
    }`;
    buttons = [
      <Button action="post" target={{ query: { choice: "continue" } }}>
        Continue
      </Button>,
    ];
  }

  return {
    image: (
      <div tw="bg-pink-200 w-screen h-screen flex justify-center items-center">
        {result}
      </div>
    ),
    buttons: buttons,
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
