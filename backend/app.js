import express from "express"
import { connection } from "./database/connection.js"
import 'dotenv/config';
import uploadRouter from "./routes/uploadAdminRoute.js"
import outputRouter from "./routes/outputData.js"
import cors from "cors"




const app = express();


app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT","DELETE"],
    credentials: true,
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/",outputRouter)
app.use("/api/v1/",uploadRouter)

connection();

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app