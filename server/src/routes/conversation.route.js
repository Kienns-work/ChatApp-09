const express = require('express');
const { protect } = require("../middlewares/auth");
const { createConversationOneToOne, getConversations, createGroupConversation } = require('../controllers/conversation.controller');

const router = express.Router();

router
  .route("/")
  .get(protect, getConversations)
  .post(protect, createConversationOneToOne);

router
  .route("/group")
  .post(protect, createGroupConversation);

module.exports = router;
