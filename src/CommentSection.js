import React, {Component} from 'react';
import {Comment} from './Comment';

export class CommentSection extends Component {
  render() {
    const comments = this.props.comments;

    return (
      <div className="CommentSection">
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    );
  }
}
