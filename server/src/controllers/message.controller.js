const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, messageService } = require('../services');
const response = require('../utils/successResponse');

const createMessage = catchAsync(async (req, res) => {
  const dataBody = {
    content: req.body.content,
    sender: req.user,
    conversation: req.body.conversation
  }

  const newMessage = await messageService.createMessage(dataBody);

  response(res, httpStatus.CREATED, "Success", newMessage);
});

const getMessages = catchAsync(async (req, res) => {
  const messages = await messageService.getMessages(req.body.conversation);

  response(res, httpStatus.OK, "Success", messages);
})

module.exports = {
  createMessage,
  getMessages,
}