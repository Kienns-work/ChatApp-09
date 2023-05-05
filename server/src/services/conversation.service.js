const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Conversation } = require("../models");

const createConversationOneToOne = async (reqUser, user) => {
  const existConversation = await Conversation.findOne({
    $and: [
      {
        users: { $size: 2 },
      },
      {
        users: { $all: [reqUser, user] },
      },
    ],
  }).populate("users", "-password");

  if (!existConversation) {
    const conversation = {
      conversationName: "OneToOne",
      users: [reqUser, user],
    };

    const newConversation = await Conversation.create(conversation);
    return newConversation;
  }

  return existConversation;
};

const createGroupConversation = async (conversationBody) => {
  const groupConversation = await Conversation.create(conversationBody);

  return groupConversation;
}

const getConversations = async (reqUser) => {
  const conversations = await Conversation.find({
    users: { $elemMatch: { $eq: reqUser } },
  })
  .populate("users", "-password")
  .sort({ updatedAt: -1 });

  return conversations;
};

const addToConversation = async (conversationId, userId) => {
}

module.exports = {
  createConversationOneToOne,
  createGroupConversation,
  getConversations
}


