
import { createFrames, Button } from "frames.js/next";

const frames = createFrames({
  initialState: {
    tossResult: "",
  },
});
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <div tw="bg-green-400 w-screen h-screen flex justify-center items-center flex-col">
        <div tw="text-7xl mb-16">Hand Cricket</div>
        <div>Toss time</div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{ query: { tossResult: "heads" }, pathname: "/toss-result" }}
      >
        Heads
      </Button>,
      <Button
        action="post"
        target={{ query: { tossResult: "tails" }, pathname: "/toss-result" }}
      >
        Tails
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
