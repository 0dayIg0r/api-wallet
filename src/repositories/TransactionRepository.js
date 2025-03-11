import transactionSchema from "../schemas/Transactions.js";

async function create(data) {
  return transactionSchema.create(data);
}

export default { create };
