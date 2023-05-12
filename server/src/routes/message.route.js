const express = require("express");
const { protect } = require("../middlewares/auth");
const messageController = require('../controllers/message.controller');

const router = express.Router();

router
  .route("/")
  .get(protect, messageController.getMessages)
  .post(protect, messageController.createMessage);

module.exports = router;