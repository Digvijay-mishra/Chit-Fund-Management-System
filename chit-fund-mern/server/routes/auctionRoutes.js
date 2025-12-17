const router = require("express").Router();
const Group = require("../models/Group");

// GET all groups
router.get("/", async (req, res) => {
  const groups = await Group.find();
  res.json(groups);
});

// CREATE group
router.post("/", async (req, res) => {
  const group = new Group(req.body);
  await group.save();
  res.json(group);
});

module.exports = router;
