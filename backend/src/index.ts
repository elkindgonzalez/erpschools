import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import indexRoutes from "./presentation/routes/index.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:5173",
    /* origin: "https://erpschools.onrender.com", */
    credentials: true
}))
app.use(express.json());
app.use(indexRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
