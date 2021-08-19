import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
   _state : {
    profilePage: {
      posts : [
        {id: 1, message: 'Hi, how are You?', likesCount: 24},
        {id: 2, message: 'I`m fine and You?', likesCount: 4},
        {id: 3, message: 'I`m busy now, sorry...', likesCount: 2}
      ],
      newPostText: 'newPostText'
    },
    dialogsPage: { 
      dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Siroyga'}
      ],   
      messages: [
          {id: 1, message: 'Hello'},
          {id: 2, message: 'Hi'},
          {id: 3, message: 'Hello!'},
          {id: 4, message: 'How are you?'}
      ],
      newMassageBody: ""
    },
    sideBar: {}
  },
  _callSubscriber () {
    console('state changed')
  },

  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost(){
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPosttext(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    
    this._callSubscriber(this._state);
   }
};

export default store;
window.store = store;