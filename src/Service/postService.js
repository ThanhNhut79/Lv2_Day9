import Post from "../Models/postModel.js";

const postService = {
  async createPost(data) {
    try {
      return await Post.create(data);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getAllPosts() {
    try {
      return await Post.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getPostById(id) {
    try {
      return await Post.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async updatePost(id, newData) {
    try {
      return await Post.findByIdAndUpdate(id, newData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async deletePost(id) {
    try {
      return await Post.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default postService;
