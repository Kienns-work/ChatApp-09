const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const conversationSchema = mongoose.Schema(
  {
    conversationName: {
      type: String,
      trim: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }
    ],
  }
);

// add plugin that converts mongoose to json
conversationSchema.plugin(toJSON);

module.exports = mongoose.model('Conversation', conversationSchema);