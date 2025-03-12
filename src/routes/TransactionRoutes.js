import { Router } from "express";
import TransactionController from "../controllers/TransactionController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post("/transactions", TransactionController.create);
transactionRouter.get("/transactions", TransactionController.getAllByUser);

export default transactionRouter;
