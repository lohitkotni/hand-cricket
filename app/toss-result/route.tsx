import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  const computerChoice = Math.floor(Math.random() * 2) + 1;
  let result, buttons;

  if (randomNumber === ctx.pressedButton?.index) {
    result = "You won the toss";
    buttons = [
      <Button action="post" target={{ query: { choice: "batting", userScore:0 },pathname:"/userBat" }}>
        Batting
      </Button>,
      <Button action="post" target={{ query: { choice: "bowling" },pathname:"/userBowl"}}>
        Bowling
      </Button>,
    ];
  } else {
    result = `You lost the toss and computer chose to ${
      computerChoice === 1 ? "bat" : "bowl"
    }`;
    if (result == "You lost the toss and computer chose to bat") {
      buttons = [
        <Button
          action="post"
          target={{ query: { choice: "continueBowl" }, pathname :"/userBowl" }}
        >
          Continue
        </Button>,
      ];
    } else {
      buttons = [
        <Button
          action="post"
          target={{ query: { choice: "continueBat", userScore:0 }, pathname:"/userBat" }}
        >
          Continue
        </Button>,
      ];
    }
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
