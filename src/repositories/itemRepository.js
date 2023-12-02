const Item = require("../models/itemModel");

const getAllItems = async () => {
  return await Item.find();
};

const getItemById = async (itemId) => {
  return await Item.findById(itemId);
};

const updateItem = async (itemId, updatedData) => {
  return await Item.findByIdAndUpdate(itemId, updatedData, { new: true });
};

const deleteItem = async (itemId) => {
  return await Item.findByIdAndRemove(itemId);
};

module.exports = {
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
