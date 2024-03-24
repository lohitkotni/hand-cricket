import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx) => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  const computerChoice = Math.floor(Math.random() * 2) + 1;

  if (randomNumber === ctx.pressedButton?.index) {
    return {
      image: (
        <div tw="bg-pink-200 w-screen h-screen flex justify-center items-center">
          You won the toss
        </div>
      ),
      buttons: [
        <Button action="post" target={{ query: { choice: "batting", userScore:0 },pathname:"/userBat" }}>
          Batting
        </Button>,
        <Button action="post" target={{ query: { choice: "bowling" },pathname:"/userBowl"}}>
          Bowling
        </Button>,
      ],
    };
  } else {
    if (Math.floor(Math.random()*2) === 0) {
      return {
        image: (
          <div tw="bg-pink-200 w-screen h-screen flex justify-center items-center">
            You lost the toss and computer chose to bat
          </div>
        ),
        buttons: [
          <Button
            action="post"
            target={{ query: { choice: "continueBowl" }, pathname :"/userBowl" }}
          >
            Continue
          </Button>,
        ]
      };
    } else {
      return {
        image: (
          <div tw="bg-pink-200 w-screen h-screen flex justify-center items-center">
            You lost the toss and computer chose to bowl
          </div>
        ),
        buttons: [
          <Button
            action="post"
            target={{ query: { choice: "continueBat", userScore:0 }, pathname:"/userBat" }}
          >
            Continue
          </Button>,
        ], 
        accepts: [
          {
          id: "farcaster",
          version: "vNext"
          },
          {
            id:"xmtp",
            version:"vNext"
          }
        ]
      };
    }
  }
});

export const GET = handleRequest;
export const POST = handleRequest;
