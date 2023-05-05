const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { toJSON } = require('./plugins');

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
      minLength: [8, 'Password must be at least 8 characters'],
    },
    email: {
      type: String,
    },
    nickname: {
      type: String,
    },
    status: {
      type: String,
      enum: ['online', 'offline', 'busy'],
    },
    role: {
      type: String,
      default: 'user',
    }
  },
  {
    timestamps: true,
  }
);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

/**
 * Check if username is taken
 * @param {string} username - The user's username
 * @returns {Promise<boolean>}
 */
userSchema.statics.isUsernameTaken = async function (username) {
  const user = await this.findOne({ username });
  return !!user;
};


/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  next();
});

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

module.exports = mongoose.model('User', userSchema);
