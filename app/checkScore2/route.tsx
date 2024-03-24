import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx)=>{;
    let computerScore = Number(ctx.searchParams.computerScore || 0)

    return {
        image: (
            <div tw="flex flex-col">{computerScore+1} is your target.</div>
        ),
        buttons: [
            <Button action="post"
            target={{query:{computerScore},pathname:"/chase"}}>LFG</Button>
        ]
    }
})

export const GET = handleRequest;
export const POST = handleRequest;