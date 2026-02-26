import express, { type Express } from "express";
import cors from "cors";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend connected successfully 🚀" });
});

export default app;