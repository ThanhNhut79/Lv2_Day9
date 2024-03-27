import commentService from "../Service/commentService.js";

const commentController = {
  async createComment(req, res) {
    try {
      const commentData = req.body;
      const comment = await commentService.createComment(commentData);
      res.status(201).json(comment);
    } catch (error) {
      handleError(res, error);
    }
  },

  async getAllCommentsByPostId(req, res) {
    try {
      const postId = req.params.postId;
      const comments = await commentService.getAllCommentsByPostId(postId);
      res.json(comments);
    } catch (error) {
      handleError(res, error);
    }
  },

  async getCommentById(req, res) {
    try {
      const commentId = req.params.id;
      const comment = await commentService.getCommentById(commentId);
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.json(comment);
    } catch (error) {
      handleError(res, error);
    }
  },

  async updateComment(req, res) {
    try {
      const commentId = req.params.id;
      const newData = req.body;
      const updatedComment = await commentService.updateComment(
        commentId,
        newData
      );
      if (!updatedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.json(updatedComment);
    } catch (error) {
      handleError(res, error);
    }
  },

  async deleteComment(req, res) {
    try {
      const commentId = req.params.id;
      const deletedComment = await commentService.deleteComment(commentId);
      if (!deletedComment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      res.json({ message: "Comment deleted successfully" });
    } catch (error) {
      handleError(res, error);
    }
  },
};

function handleError(res, error) {
  res.status(500).json({ message: error.message });
}

export default commentController;
