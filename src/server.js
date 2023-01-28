import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import formRoutes from "./routes/form.routes.js";

//Settings
const app = express();
const __dirname = path.resolve();
app.engine("handlebars", engine());
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extends: false }));
app.use(indexRoutes);
app.use("/api", formRoutes);

//Routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(5000);
console.log("Express server listening on port 5000");
