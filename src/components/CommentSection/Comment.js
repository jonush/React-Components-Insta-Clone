// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = ({username, comment}) => {
  return (
    <div className="comment-text">
      <span className="user">{username}</span>
      {' '}
      <span className="comment">{comment}</span>
    </div>
  );
};


export default Comment;
