const express = require("express");
const {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
  getOnePost,
  likePost,
  unlikePost,
  commentPost,
  deleteComment,
  getUserPosts,
} = require("../controllers/post.controller");
const {
  postRules,
  validatorPost,
  commentRules,
} = require("../middlewares/validatorPost");
const verifyAuth = require("../middlewares/verifyAuth");
const router = express.Router();

router.post("/", verifyAuth, postRules(), validatorPost, createPost);
router.get("/", getAllPosts);
// get all posts in a user profile
router.get("/profile/:id", getUserPosts);
router.get("/:id", getOnePost);
router.put("/:id", verifyAuth, updatePost);
router.delete("/:id", verifyAuth, deletePost);
router.put("/like/:id", verifyAuth, likePost);
router.put("/unlike/:id", verifyAuth, unlikePost);
router.post(
  "/comment/:id",
  verifyAuth,
  commentRules(),
  validatorPost,
  commentPost
);
router.delete("/comment/:id/:comment_id", verifyAuth, deleteComment);
module.exports = router;
