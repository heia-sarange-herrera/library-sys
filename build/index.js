"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const node_path_1 = __importDefault(require("node:path"));
//local modules
const user_route_1 = __importDefault(require("./routes/user.route"));
const page_route_1 = __importDefault(require("./routes/page.route"));
//reusable variables
const PORT = Number(process.env.PORT) || 3000;
const SECRET_KEY = process.env.SECRET_KEY || "default_secret";
//initialize express
const app = (0, express_1.default)();
//set up configurations
app.set("view engine", "ejs");
//global middlewares
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 30000 * 60,
    },
}));
//static assets route
app.use("/assets", express_1.default.static(node_path_1.default.join(__dirname, "public")));
//routes
app.use("/", page_route_1.default);
app.use("/api/user", user_route_1.default);
//port listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
