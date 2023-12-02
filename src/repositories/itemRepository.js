const Item = require("../models/itemModel");

const createItem = async (itemData) => {
  const newItem = new Item(itemData);
  return await newItem.save();
};

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
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
