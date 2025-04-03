import { openai } from "@/app/api/openai";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(
  request: Request,
  context: { params: { [key: string]: string | string[] } }
) {
  const threadId = context.params.threadId as string;

  if (!process.env.OPENAI_ASSISTANT_ID) {
    throw new Error("OPENAI_ASSISTANT_ID environment variable is not set");
  }
  const { content } = await request.json();

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: process.env.OPENAI_ASSISTANT_ID,
  });

  return new Response(stream.toReadableStream());
}

