"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_handler_1 = require("../handlers/user.handler");
//initialized express
const router = express_1.default.Router();
router.get("/", user_handler_1.rootPage);
//export router
exports.default = router;
