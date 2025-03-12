import transactionSchema from "../schemas/Transactions.js";

async function create(data) {
  return transactionSchema.create(data);
}

async function findAllByUser(id) {
  return await transactionSchema.find({userId: id})
}

export default { create, findAllByUser };
