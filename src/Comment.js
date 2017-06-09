import React, {Component} from 'react';
import './Comment.css';

export class Comment extends Component {
  render() {
     const comment = this.props.comment;
     return (
        <div className="comment">
          <p>{comment.text}</p>
          <p><i>- {comment.from}</i></p>
        </div>
     );
  }
}