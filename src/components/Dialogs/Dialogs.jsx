import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogspage-reducer";
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";
import Textarea from "../assets/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utilites/validators/validator";
import AddMessageForm from '../Dialogs/Messages/AddMessagesForm.jsx'


const Dialogs= (props) => {

    let state = props.dialogsPage

    // let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageText = state.newMessageText


    let addNewMessage = (values) => {
            props.sendMessage(values.newMessageText)
    }

/*
    let onNewMessageClick = () => {
        props.sendMessage()
        // props.store.dispatch(sendMessageActionCreator())
    }
*/

/*    let onNewMessageChange = (event) => {
        let messageText = event.target.value
        props.updateNewMessageText(messageText)
        // props.store.dispatch(updateNewMessageTextActionCreator(messageText))
    }*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

/*
const MaxLength50 = maxLengthCreator(50)

 const AddMessageForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageText' placeholder='Enter your new message' component={Textarea} validate={[required, MaxLength50 ]}  />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}
*/



/*
const AddMessageFormRedux = reduxForm({form:'dialogAddNewMessageForm'})(addNewMessageForm)*/

export default Dialogs