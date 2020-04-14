// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComment] = useState(props.comments);
  const [timestamp, setTime] = useState(props.timestamp);
  console.log(props);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
        {comments.map(content => (
          <Comment key={content.username} comment={content}  timestamp={timestamp} />
        ))}

      <CommentInput />
    </div>
  );
};

export default CommentSection;
