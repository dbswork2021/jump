const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    url: { type: mongoose.SchemaTypes.ObjectId, ref:"Url" },
    createTime: { type: Number },
  },
  {
    versionKey: false,
    timestamps: {
      // currentTime: () => Math.floor(Date.now() / 1000),
      currentTime: () => Date.now(),
      createdAt: 'createTime',
    },
  }
);

module.exports = mongoose.model('Agent', schema);
