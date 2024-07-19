"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_handler_1 = require("../handlers/page.handler");
//initialized express
const router = express_1.default.Router();
router.get("/", page_handler_1.indexHandler);
router.post("/login", page_handler_1.loginHandler);
//export router
exports.default = router;
