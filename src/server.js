import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import morgan from "morgan";
import multer from "multer";
import indexRoutes from "./routes/index.routes.js";
import formRoutes from "./routes/form.routes.js";
import { v4 as uuidv4 } from 'uuid';




//Settings
const app = express();
const __dirname = path.resolve();
app.engine("handlebars", engine());
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "handlebars");



const storage = multer.diskStorage({
  destination: path.join(__dirname, '/src/public/img'), 
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  }
})
const upload = multer({ 
  storage,
  limits: {fileSize: 10000000},
  dest: path.join(__dirname, '/src/public/img'),
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      cb(null, true);
    }else{
      cb("Error archivo no identificado");
    }
  }
})

//middleware
app.use(express.json());
app.use(upload.single('nameImg'));
app.use(morgan("dev"));
app.use(express.urlencoded({ extends: false }));
app.use(indexRoutes);
app.use("/api", formRoutes);

// //Static Files
app.use(express.static(path.join(__dirname, '/src/public')))


//Routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(5000);
console.log("Express server listening on port 5000");
