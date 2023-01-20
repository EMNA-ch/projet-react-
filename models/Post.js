const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema(
  {
    user: {
      id: String,
      name: String,
      avatar: Object,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    places: [
      {
        step: Number,
        place: String,
        image: Object,
        cost: String,
        description: String,
      },
    ],
    image: {
      type: Object,
      required: true,
    },
    transport: {
      type: String,
      required: true,
    },
    cost: {
      type: String,
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
          creation_date: {
            type: Date,
            default: Date.now(),
          },
        },
        { timestamps: true },
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
