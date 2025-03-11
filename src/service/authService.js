import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

async function signup(body) {
  const hashPassword = bcrypt.hashSync(body.password, 4);

  const userExists = await authRepository.findByEmail(body.email);


  if (userExists) throw new Error("User already exist!");

  return authRepository.create({ ...body, password: hashPassword });
}

async function signin(body) {
  const user = await authRepository.findByEmail(body.email);
  if (!user) throw new Error("E-mail or password incorrect!");
  
  const verifyPassword = bcrypt.compareSync(body.password, user.password);
  if(!verifyPassword) throw new Error("E-mail or password incorrect!");
  
  return authRepository.generateToken(user._id);
}

export default { signup, signin };
