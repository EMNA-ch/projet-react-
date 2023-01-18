const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const {
    title,
    location,
    destination,
    places,
    description,
    transport,
    cost,
    image,
  } = req.body;

  try {
    // const user = await User.findById(req.user.id).select("-password");
    const newPost = new Post({
      user: {
        id: req.user.id,
        name: req.user.name,
      },
      title,
      location,
      destination,
      places,
      description,
      transport,
      cost,
      image,
    });
    const post = await newPost.save();
    res.send(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    let posts = await Post.find();
    posts = posts.reverse().slice(0, 10);
    res.send(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getOnePost = async (req, res) => {
  try {
    // console.log(req.params.id);
    const post = await Post.findById(req.params.id);
    // console.log("post", post);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.send(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    const userPosts = posts.filter((el) => el.user.id == req.params.id);

    res.send(userPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    if (post.user.id !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }
    res.send(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.user.id !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }
    await post.remove();
    res.send({ msg: "post removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //check if the post has been liked by the user
    if (
      post.likes.postlikes.filter((like) => like.user == req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }
    post.likes.postlikes.unshift({ user: req.user.id });
    await post.save();
    res.send(post.likes.postlikes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    //check if the post has been liked by the user
    if (
      post.likes.postlikes.filter((like) => like.user == req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: "Post has not yet liked" });
    }
    const removeIndex = post.likes.postlikes
      .map((like) => like.user)
      .indexOf(req.user.id);

    post.likes.postlikes.splice(removeIndex, 1);
    await post.save();
    res.send(post.likes.postlikes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.commentPost = async (req, res) => {
  const newComment = {
    user: req.user.id,
    name: req.user.name,
    text: req.body.text,
  };
  try {
    const post = await Post.findById(req.params.id);
    post.comments.usercomments.unshift(newComment);
    const newPost = await post.save();
    res.send(newPost.comments.usercomments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // get the comment from the post
    const comment = post.comments.usercomments.find(
      (comment) => comment.id === req.params.comment_id
    );
    console.log(comment);
    if (!comment) {
      res.status(404).json({ msg: "comment does not exist" });
    }

    //check that the user is the owner of the comment
    if (comment.user !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }

    const removeIndex = post.comments.usercomments
      .map((comment) => comment.user)
      .indexOf(req.user.id);

    post.comments.usercomments.splice(removeIndex, 1);

    await post.save();
    res.send(post.comments.usercomments);
  } catch (error) {
    // console.error(error.message);
    res.status(500).send("server error");
  }
};
