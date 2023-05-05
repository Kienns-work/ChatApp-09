const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../utils/successResponse");
const { conversationService } = require("../services");

const createConversationOneToOne = catchAsync(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "UserId is a required parameter"
    );
  }

  const conversation = await conversationService.createConversationOneToOne(
    req.user,
    userId
  );

  response(res, httpStatus.CREATED, httpStatus[201], conversation);
});

const createGroupConversation = catchAsync(async (req, res) => {
  const dataGroup = req.body;

  if (dataGroup.users.length < 2) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "More than 2 users are required to create a group chat"
    );
  }

  dataGroup.users.push(req.user);

  const groupConversation = await conversationService.createGroupConversation(dataGroup);

  response(res, httpStatus.CREATED, httpStatus[201], groupConversation);
});

const getConversations = catchAsync(async (req, res) => {
  const conversations = await conversationService.getConversations(req.user);

  response(res, httpStatus.OK, "Success", conversations);
});

module.exports = {
  createConversationOneToOne,
  createGroupConversation,
  getConversations,
};
