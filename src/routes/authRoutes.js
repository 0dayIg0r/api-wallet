import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validationSchemaMiddleware } from "../middleware/validationSchemaMiddleware.js";
import { createUserValidation } from '../schemas/validation/CreateUserValidation.js'
import { AuthUserValidation } from "../schemas/validation/AuthUserValidation.js";

const authRouter = Router();

authRouter.post("/signup", validationSchemaMiddleware(createUserValidation), authController.signup);
authRouter.post('/signin', validationSchemaMiddleware(AuthUserValidation),authController.signin)
authRouter.get('/me', authMiddleware,validationSchemaMiddleware, authController.userLogged)

export default authRouter ;
