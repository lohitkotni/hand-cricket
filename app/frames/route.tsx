import { createFrames, Button } from "frames.js/next";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  return {
    image: <div tw="bg-green-200 text-7xl font-black p-80">It's toss time</div>,
    buttons: [
      <Button action="post">
        Heads
      </Button>,
      <Button action="post">
        Tails
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
