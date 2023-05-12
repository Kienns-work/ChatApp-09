const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Message } = require('../models');

const createMessage = async (messageBody) => {
  let newMessage = await Message.create(messageBody);

  newMessage = await newMessage.populate("sender");

  return newMessage;
}

const getMessages = async (conversationId) => {
  const messages = await Message.find({ conversation: conversationId }).populate(["sender", "conversation"]);

  return messages;
}

module.exports = {
  createMessage,
  getMessages,
}