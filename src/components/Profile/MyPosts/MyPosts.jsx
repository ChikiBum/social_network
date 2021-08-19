import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = ( { updateNewPostText, addPost, profilePage} ) => {

let postsElements = profilePage.posts.map( el => <Post message={el.message} likes={el.likesCount} key={el.id} id={el.id}/>);

const newPostElement = React.createRef();

const onAddPost = () => {
  addPost();
};

const onPostChange = () => {
  const text = newPostElement.current.value;
  updateNewPostText(text);
};

    return (
        <div className={classes.postsBlock}>
          <h3>My post</h3>
          <div>
            <div>
                <textarea
                onChange={onPostChange} 
                ref={newPostElement} 
                value={ profilePage.newPostText }/>
           </div>
           <div>
                <button onClick={ onAddPost }>Add post</button>
           </div>
          </div>
          <div className={classes.posts}>
            { postsElements }
        </div>
      </div>
    )
};


export default MyPosts;