
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a response from the Gemini AI model based on a system prompt and user inputs.
 */
export async function generateToolResponse(systemPrompt: string, userInputs: Record<string, string>): Promise<string> {
  // Use process.env.API_KEY directly as required by guidelines
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found. Please ensure it is configured.");
  }

  // Initialize the Gemini client with the API key as a named parameter
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const userInputString = Object.entries(userInputs)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  try {
    // Generate content using the specified model and combined prompt
    // Model name follows the provided naming conventions for simple text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `System Instruction: ${systemPrompt}\n\nUser Data:\n${userInputString}\n\nPlease generate a helpful, professional, and detailed response for the virtual assistant:`,
    });

    // Extract text from the response using the .text property (not a method call)
    return response.text || "Sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error("Failed to connect to the AI service. Please try again.");
  }
}
