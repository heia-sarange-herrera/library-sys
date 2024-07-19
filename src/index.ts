import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import session from "express-session";
import path from "node:path";
//local modules
import userRoutes from "./routes/user.route";
import pageRoutes from "./routes/page.route";
//reusable variables
const PORT: number = Number(process.env.PORT) || 3000;
const SECRET_KEY: string = process.env.SECRET_KEY || "default_secret";

//initialize express
const app = express();

//set up configurations
app.set("view engine", "ejs");

//global middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 30000 * 60,
    },
  })
);

//static assets route
app.use("/assets", express.static(path.join(__dirname, "public")));

//routes
app.use("/",pageRoutes);
app.use("/api/user", userRoutes);


//port listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
