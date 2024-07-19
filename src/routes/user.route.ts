import express from "express";
import { rootPage } from "../handlers/user.handler";

//initialized express
const router = express.Router();

router.get("/", rootPage);

//export router
export default router;
