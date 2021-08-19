const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

const initialState = {
    posts : [
      {id: 1, message: 'Hi, how are You?', likesCount: 24},
      {id: 2, message: 'I`m fine and You?', likesCount: 4},
      {id: 3, message: 'I`m busy now, sorry...', likesCount: 2}
    ],
    newPostText: 'newPostText',
    profile: null
  }

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default: 
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;