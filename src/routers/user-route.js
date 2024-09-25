import { Router } from "express";
import { signup, login } from "../controllers/user-controller.js";

const router = Router();

/*
    CRUD USUÁRIO
*/

router.post("/signup", signup);
router.post("/login", login)

export default router;