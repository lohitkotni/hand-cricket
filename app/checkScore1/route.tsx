import { createFrames, Button } from "frames.js/next";

const frames = createFrames();

const handleRequest = frames(async (ctx)=>{
    let userScore = Number(ctx.searchParams.userScore || 0);

    return {
        image: (
            <div tw="flex flex-col">You have to defend {userScore}.Good luck</div>
        ),
        buttons: [
            <Button action="post"
            target={{query:{userScore},pathname:"/defend"}}>LFG</Button>
        ]
    }
})

export const GET = handleRequest;
export const POST = handleRequest;