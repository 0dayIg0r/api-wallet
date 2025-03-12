import TransactionRepository from "../repositories/TransactionRepository.js";

async function create(body, id) {
  if (!id) throw new Error("User Id is required");

  return await TransactionRepository.create({ ...body, userId: id });
}

async function findAllByUser(id) {
  return await TransactionRepository.findAllByUser(id);
}

async function updatedT(id, body) {
  if (!id) throw new Error("User Id is required");
  return await TransactionRepository.updateTransaction(id, body);
}

async function deleteT(id) {
  if (!id) throw new Error("User Id is required");
  return await TransactionRepository.deleteT(id);
}
export default { create, findAllByUser, updatedT, deleteT };
