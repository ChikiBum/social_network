import React from 'react';
import classes from './Post.module.css';

const Post = ( props ) => {
  return (
    <div className={classes.item}>
      <img src="https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/Marin.png" alt="marin bikes logo" />
      {props.message}
      <div>
        <span>{props.likes} Likes </span>
      </div>
    </div>
  )
};


export default Post;