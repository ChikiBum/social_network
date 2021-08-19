const UPDATE_NEW_MASSAGE_BODY='UPDATE-NEW-MASSAGE-BODY';
const SEND_MASSAGE='SEND-MASSAGE' ;

const initialState = { 
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
  }

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_NEW_MASSAGE_BODY: {
            return {
                ...state,
                newMassageBody: action.body
            };
        }
        case SEND_MASSAGE:{
            const body = state.newMassageBody;
            return {
                ...state,
                newMassageBody: '',
                messages: [...state.messages, {id: 5, message: body} ]
            };
        }
        default :
            return state;
    }

    return state;
};

export const sendMessageCreator = () => ({type: SEND_MASSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MASSAGE_BODY, body: body});

export default dialogsReducer;