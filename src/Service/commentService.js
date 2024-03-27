import Comment from "../Models/commentModel.js";

const commentService = {
  async createComment(data) {
    try {
      return await Comment.create(data);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getAllCommentsByPostId(postId) {
    try {
      return await Comment.find({ postId });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getCommentById(id) {
    try {
      return await Comment.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async updateComment(id, newData) {
    try {
      return await Comment.findByIdAndUpdate(id, newData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async deleteComment(id) {
    try {
      return await Comment.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default commentService;
