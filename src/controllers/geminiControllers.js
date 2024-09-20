
import getGeminiResponse from "../services/geminiServices.js";

const generateText = async (req, res, next) => {
    try {
        const prompt = req.body.prompt;
        const aiResponse = await getGeminiResponse(prompt);
        console.log(aiResponse )
        res.status(200).json({ success: true, data: aiResponse });
    } catch (error) {
        next(error);
    }
};

export default generateText;