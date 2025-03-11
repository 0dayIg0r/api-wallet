import TransactionService from "../service/TransactionService.js";

async function create(req, res) {
  const body = req.body;
  const {_id: id} = res.locals.user

  try {
    const transaction = await TransactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (e) {
    res.status(409).send(e.message);
  }
}

export default { create };
