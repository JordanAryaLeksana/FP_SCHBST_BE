import { GoogleGenerativeAI } from "@google/generative-ai";

const getGeminiResponse = async (prompt) => {

    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"  });
        const response = await (await model.generateContent(prompt)).response.text()
        console.log(response)
        return response   
    } catch (error) {
        console.log(error)
        throw new Error('failed interact with API')
    }
}

export default getGeminiResponse