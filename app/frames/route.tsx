import { createFrames, Button } from "frames.js/next";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="bg-green-400 w-screen h-screen flex justify-center items-center flex-col">
        <div tw="text-7xl mb-16">Hand Cricket</div>
        <div>It's toss time</div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ query: { value: 1 }, pathname: "/toss-result" }}
      >
        Heads
      </Button>,
      <Button
        action="post"
        target={{ query: { value: 2 }, pathname: "/toss-result" }}
      >
        Tails
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
