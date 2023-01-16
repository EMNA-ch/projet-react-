const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema(
  {
    user: {
      id: String,
      name: String,
      // ref: "user",
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      // required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    transport: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    comments: {
      usercomments: [
        {
          user: {
            type: String,
            ref: "user",
          },
          name: {
            type: String,
            require: true,
          },
          text: {
            type: String,
            require: true,
          },
        },
      ],
    },
    likes: {
      postlikes: [
        {
          user: {
            type: String,
            ref: "user",
          },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
