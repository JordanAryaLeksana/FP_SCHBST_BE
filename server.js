
import express from 'express'



const app = express()

// PORT=8000
// OPEN_API_KEY = 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
const PORT = process.env.PORT || 8000



app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})