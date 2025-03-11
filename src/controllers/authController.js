import authService from "../service/authService.js";

function signup(req, res) {
  const body = req.body;
 
  const newUser = authService.signup(body);
 

  res.send(newUser);
}

export default { signup };
