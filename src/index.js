import "dotenv/config";
import "./db";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import appleRouter from "./routers/appleRouter";
import noticeRouter from "./routers/noticeRouter";


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => res.send({ name: "hi kim" }));
app.use("/notice", noticeRouter);
app.use("/apple", appleRouter);

app.listen(PORT, () => console.log(`🐣 http://localhost:${PORT}`));
