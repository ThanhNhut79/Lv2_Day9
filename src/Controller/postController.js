import postService from "../Service/postService.js";

const postController = {
  async createPost(req, res) {
    try {
      const postData = req.body;
      const post = await postService.createPost(postData);
      res.status(201).json(post);
    } catch (error) {
      handleError(res, error);
    }
  },

  async getAllPosts(req, res) {
    try {
      const posts = await postService.getAllPosts();
      res.json(posts);
    } catch (error) {
      handleError(res, error);
    }
  },

  async getPostById(req, res) {
    try {
      const postId = req.params.id;
      const post = await postService.getPostById(postId);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      handleError(res, error);
    }
  },

  async updatePost(req, res) {
    try {
      const postId = req.params.id;
      const newData = req.body;
      const updatedPost = await postService.updatePost(postId, newData);
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(updatedPost);
    } catch (error) {
      handleError(res, error);
    }
  },

  async deletePost(req, res) {
    try {
      const postId = req.params.id;
      const deletedPost = await postService.deletePost(postId);
      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      handleError(res, error);
    }
  },
};

function handleError(res, error) {
  res.status(500).json({ message: error.message });
}

export default postController;
