import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('length of posts should be added', () => {
    //1. test data
    let action = addPostActionCreator('test text')
    
    //2. action
    let newState = profileReducer(state, action);
    //3. inspect
    expect(newState.posts.length).toBe(5);
});

it('text of 5th posts should be correct', () => {
    //1. test data
    let action = addPostActionCreator('test text')
    
    //2. action
    let newState = profileReducer(state, action);
    //3. inspect
    expect(newState.posts[4]).toBe('test text');
});

it('after deleting length of messages shuold be decrement', () => {
    //1. test data
    let action = deletePost(1)
    
    //2. action
    let newState = profileReducer(state, action);
    //3. inspect
    expect(newState.posts.length).toBe(3);
});




