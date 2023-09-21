import { Dispatch, SetStateAction } from "react";

export async function callChatAPI(
  prompt: string,
  setResponseData: Dispatch<SetStateAction<string>>,
) {
  // See https://platform.openai.com/docs/models/model-endpoint-compatibility
  const APIBody = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
    max_tokens: 300,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_OPENAI_API_KEY,
      },
      mode: "no-cors",
      body: JSON.stringify(APIBody),
    });
    // console.log(response);
    if (!response.ok) {
      const message = response.statusText
        ? `- ${response.status}:${response.statusText}`
        : "";
      setResponseData(`Something went wrong ${message}`);
      return;
    }
    const data = await response.json();
    console.log(data);
    const firstChoice = data.choices[0].message.content;
    setResponseData(firstChoice);
    return;
  } catch (error: unknown) {
    console.log(error);
  }
}
