const itemRepository = require("../repositories/itemRepository");

const createItem = async (itemData) => {
  const newItem = new Item(itemData);
  return await newItem.save();
};

const getAllItems = async () => {
  return await itemRepository.getAllItems();
};

const getItemById = async (itemId) => {
  return await itemRepository.getItemById(itemId);
};

const updateItem = async (itemId, updatedData) => {
  // Add validation logic here if needed
  return await itemRepository.updateItem(itemId, updatedData);
};

const deleteItem = async (itemId) => {
  return await itemRepository.deleteItem(itemId);
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
