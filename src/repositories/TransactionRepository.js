import transactionSchema from "../schemas/Transactions.js";

async function create(data) {
  return transactionSchema.create(data);
}

async function findAllByUser(id) {
  return await transactionSchema.find({ userId: id });
}

async function updateTransaction(id, body) {
  return await transactionSchema.updateOne(
    { _id: id },
    {
      $set: {
        value: body.value,
        description: body.description,
      },
    }
  );
}

export default { create, findAllByUser, updateTransaction };
