/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';
import dummyData from './dummy-data';

const App = () => {

  const [posts, setPosts] = useState(dummyData);
  const [search, setSearch] = useState('');

  const getPost = () => {
    const term = search.trim()
    return posts.filter(post => {
      if(!term) {
        return post
      }
      if(post.username.toLowerCase().includes(term.toLowerCase())) {
        return post
      }
    })
  }

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar searchTerm={setSearch}/>
      <PostsPage posts={getPost()}/>
    </div>
  );
};

export default App;
