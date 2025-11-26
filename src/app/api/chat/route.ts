import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const client = new Groq({
      apiKey: process.env.GROQ_API_KEY!,
    });

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        // { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error("GROQ ERROR:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
