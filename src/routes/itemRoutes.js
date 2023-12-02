const express = require("express");
const router = express.Router();
const itemService = require("../services/itemService");

router.post("/items", async (req, res) => {
  try {
    const newItem = await itemService.createItem(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/items", async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/items/:id", async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/items/:id", async (req, res) => {
  try {
    const updatedItem = await itemService.updateItem(req.params.id, req.body);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await itemService.deleteItem(req.params.id);
    res.json(deletedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
