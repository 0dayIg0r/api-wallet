import { Router } from "express";
import TransactionController from "../controllers/TransactionController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validationSchemaMiddleware } from "../middleware/validationSchemaMiddleware.js";
import { createTransactionValidation } from "../schemas/validation/CreateTransactionValidation.js";
const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post(
  "/transactions",
  validationSchemaMiddleware(createTransactionValidation),
  TransactionController.create
);
transactionRouter.get("/transactions", TransactionController.getAllByUser);

export default transactionRouter;
