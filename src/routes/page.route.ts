import express from 'express'
import { indexHandler, loginHandler } from '../handlers/page.handler';

//initialized express
const router = express.Router();

router.get("/", indexHandler);
router.post("/login", loginHandler);

//export router
export default router;