import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component={Textarea}  validate={[required, maxLength10]} placeholder='Enter message'/>
            <div><button>Send</button></div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'mypostsAddPostForm'})(AddNewPostForm)

const MyPosts = React.memo((props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = (values) => {
        // debugger;
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
});



export default MyPosts;