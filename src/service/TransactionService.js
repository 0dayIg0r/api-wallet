import TransactionRepository from "../repositories/TransactionRepository.js";

async function create(body, id) {
    if(!id) throw new Error('User Id is required')

        return await TransactionRepository.create({...body, userId: id})
}
export default { create };
