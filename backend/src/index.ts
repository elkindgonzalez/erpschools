import app from "./app";
import { PORT } from "./infrastructure/config/env";

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});