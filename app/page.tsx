/* eslint-disable react/jsx-key */
import { fetchMetadata } from "frames.js/next";
 
export async function generateMetadata() {
  return {
    title: "My Page",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL("/frames", process.env.VERCEL_URL ? `https://hand-cricket-one.vercel.app` : "https://hand-cricket-one.vercel.app")
    ),
  };
}
 
export default function Page() {
  return <span>My existing page</span>;
}