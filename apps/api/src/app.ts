import cors from "cors";
import express from "express";
import testRouter from "./routes/test.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/test", testRouter);

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

export default app;
