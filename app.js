
import express from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend API is Running");
});

app.use("/api/posts", postRoutes);

export default app;
