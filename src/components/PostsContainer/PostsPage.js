//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
// no curly brackets needed b/c it was exported as default
import dummyData from '../../dummy-data';

const PostsPage = ({posts}) => {
  // set up state for your data
//const [posts] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        posts.map((post, index) => {
          return <Post key={index} post={post} />
        })
      }
    </div>
  );
};

export default PostsPage;
