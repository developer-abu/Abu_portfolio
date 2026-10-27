import express from 'express';
import cors from "cors"
import router from './routes/routes.js';

const app = express();

app.use(cors({
    
    origin: "https://developer-abu.me/",
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router)


export default app