import { Router } from "express";
import TransactionController from "../controllers/TransactionController.js";
import {authMiddleware} from '../middleware/authMiddleware.js'

const transactionRouter = Router();

transactionRouter.post("/transaction", authMiddleware, TransactionController.create);

export default transactionRouter;
