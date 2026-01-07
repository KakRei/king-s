import cors from "cors";
import express from "express";
import authRoutes from "./routes/auth.routes";
import productRouter from "./routes/product.routes";
import testRouter from "./routes/test.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", productRouter);
app.use("/test", testRouter);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

export default app;
