import { createFrames, Button } from "frames.js/next";

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  return {
    image: <div tw="bg-green-200 text-7xl font-black p-80">It's toss time</div>,
    buttons: [
      <Button action="post" target={{query:{value:1},pathname: "/toss-result"}}>
        Heads
      </Button>,
      <Button action="post" target={{query:{value:2},pathname:"/toss-result"}}>
        Tails
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
