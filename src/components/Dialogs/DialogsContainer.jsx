import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogspage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

/*//const DialogsContainer= (props) => {

    // let state = props.store.getState() .dialogsPage
    //
    // let onNewMessageClick= () => {
    //     props.store.dispatch(sendMessageActionCreator())
    // }
    //
    // let onNewMessageChange= (messageText) => {
    //     props.store.dispatch(updateNewMessageTextActionCreator(messageText))
    // }

    return(
        <ContextStore.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage
                let onNewMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                let onNewMessageChange = (messageText) => {
                    store.dispatch(updateNewMessageTextActionCreator(messageText))
                }

               return <Dialogs sendMessage={onNewMessageClick} updateNewMessageText={onNewMessageChange} dialogsPage={state}/>
                         }
            }
        </ContextStore.Consumer>
        )
}*/

let mapToStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
/*
        isAuth: state.auth.isAuth
*/
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        },
        // updateNewMessageText: (messageText) => {
        //     dispatch(updateNewMessageTextActionCreator(messageText))
        // }

    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


export default compose(
    connect(mapToStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)

/*const DialogsContainer = connect(mapToStateToProps, mapDispatchToProps) (AuthRedirectComponent)*/
/*
export default DialogsContainer*/


