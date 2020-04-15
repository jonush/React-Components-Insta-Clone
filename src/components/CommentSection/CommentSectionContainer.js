// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = prop => {
  // Add state for the comments
  const [comments] = useState(prop.comments);
  // console.log(props);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
        {comments.map((c, index) => (
          <Comment key={index} username={c.username} comment={c.text} />
        ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
