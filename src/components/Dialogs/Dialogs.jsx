import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = ( {dialogsPage, sendMessage, updateNewMessageBody} ) => {
  

  const dialogsElements = dialogsPage.dialogs.map( el => <DialogItem name={el.name} key={el.id} id={el.id}/>);
  const messagesElements = dialogsPage.messages.map( el => <Message message={el.message} key={el.id}/>);
 
  const onChangeMessageclick = () => {
    sendMessage();
  };
  const onNewMessageChange = (e) => {
    const  body = e.target.value;
    updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
          { dialogsElements }
       </div>
      <div className={classes.messages}>
          <div>{ messagesElements }</div>
          <div>
            <div> <textarea placeholder='enter the message' 
                            value={ dialogsPage.newMassageBody }
                            onChange={ onNewMessageChange }></textarea>  </div>
            <div> <button onClick={ onChangeMessageclick }>Send</button> </div>
          </div>
      </div>
    </div>
  )
}

export default Dialogs;