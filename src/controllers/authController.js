import authService from "../service/authService.js";

async function signup(req, res) {
  const body = req.body;

  try {
    const newUser = await authService.signup(body);
    res.status(201).send(newUser);
  } catch (e) {
    return res.status(409).send(e.message);
  }
}

async function signin(req, res) {
  const body = req.body;
  try {
    const token = await authService.signin(body);
    return res.send(token);
  } catch (e) {
    return res.status(401).send(e.message);
  }
}

async function userLogged(req, res) {
  const { _id: id } = res.locals.user;

  try {
    const user = await authService.userLogged(id);
    return res.send(user);
  } catch (e) {
    return res.status(404).send(e.message);
  }
}

export default { signup, signin, userLogged };
