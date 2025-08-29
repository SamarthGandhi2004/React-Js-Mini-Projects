// AIzaSyDeKfGdm1TXGXmT6uUzPY0XMilvkk9khyU


import { GoogleGenAI } from "@google/genai";
import { useContext } from "react";
import { Context } from "../context/Context";

const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
  console.error("❌ Gemini API key missing. Add REACT_APP_GEMINI_API_KEY in .env");
}

const ai = new GoogleGenAI({ apiKey });

export async function generateResponse(userInput) {

  try {
    const model = "gemini-2.5-flash";

    const contents = [
      {
        role: "user",
        parts: [{ text: userInput }],
      },
    ];

    const response = await ai.models.generateContent({
      model,
      contents,
    });
// return SetResult(response.candidates[0].content.parts[0].text)
  console.log(response.candidates[0].content.parts[0].text);
    return response.candidates[0].content.parts[0].text;

  } catch (err) {
    console.error("Gemini API error:", err);
    return "Something went wrong!";
  }
}
