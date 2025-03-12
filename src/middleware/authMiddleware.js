import jwt from "jsonwebtoken";
import authRepository from "../repositories/authRepository.js";
import dotenv from 'dotenv'

dotenv.config()

export async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;
  

  if (!authorization) {
    return res.status(401).send({ message: "Invalid Token" });
  }

  const parts = authorization?.split(" ");
  if (parts.length !== 2) {
    return res.status(401).send({ message: "Invalid Token" });
  }

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema)) {
    return res.status(401).send({ message: "Invalid Token" });
  }

  jwt.verify(token, process.env.SECRET_JWT, async (e, decode) => {
    if (e) {
      return res.status(401).send({ message: "Invalid Token", e: e.message });
    }

    if (!decode) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    const user = await authRepository.findById(decode.id);

    if (!user) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    res.locals.user = user
    next();
  });

}
