const { Like } = require('./Like.js');
const { Comment } = require('./Comment.js');

class Post {
  constructor(user_id, username, post_id, post_content, post_date, likes = [], comments = []) {
    this.user_id = user_id;
    this.username = username;
    this.post_id = post_id;
    this.post_content = post_content;
    this.post_date = post_date;
    this.likes = likes.map(like => new Like(like.post, like.user));
    this.comments = comments.map(comment => new Comment(comment.post_id, comment.user_id, comment.comment_content, comment.comment_id));
  }

  addLike(user) {
    const like = new Like(this, user);
    this.likes.push(like);
  }

  addComment(user_id, comment_content) {
    const comment = new Comment(this.post_id, user_id, comment_content, `comment_${this.comments.length + 1}`);
    this.comments.push(comment);
  }

  // Prepare data to be sent to frontend
  toJSON() {
    return {
      user_id: this.user_id,
      username: this.username,
      post_id: this.post_id,
      post_content: this.post_content,
      post_date: this.post_date,
      likes: this.likes.length, // Return the count of likes
      comments: this.comments.map(comment => ({
        user_id: comment.user_id,
        comment_id: comment.comment_id,
        comment_content: comment.comment_content,
      })), // Map to a lightweight structure for mobile
    };
  }
}

module.exports = { Post };
