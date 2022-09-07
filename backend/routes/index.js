import express from "express";
import {getUsers, Register} from "../controller/Users.js";

const router = express.Router();

router.get('/users', getUsers);


export default router;