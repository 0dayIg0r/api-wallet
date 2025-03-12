import TransactionService from "../service/TransactionService.js";

async function create(req, res) {
  const body = req.body;
  const { _id: id } = res.locals.user;

  try {
    const transaction = await TransactionService.create(body, id);
    return res.status(201).send(transaction);
  } catch (e) {
    res.status(409).send(e.message);
  }
}

async function getAllByUser(req, res) {
  const { _id: id } = res.locals.user;
  try {
    const transactions = await TransactionService.findAllByUser(id);
    return res.status(200).send(transactions);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

async function updateTransaction(req, res) {
  const { id } = req.params;
  const body = req.body;

  try {
    const updatedTransaction = TransactionService.updatedT(id, body);
    res.status(200).send(updatedTransaction);
  } catch (e) {
    return res.status(404).send(e.message);
  }
}

async function deleteTransaction(req, res) {
  const { id } = req.params;
  try {
    await TransactionService.deleteT(id);
    res.status(200).end();
  } catch (e) {
    res.status(401).send(e.message);
  }
}

export default { create, getAllByUser, updateTransaction, deleteTransaction };
