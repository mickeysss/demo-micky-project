/*
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
*/
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Vincent Vega'},
        {id: 2, name: 'Jules Winnfield'},
        {id: 3, name: 'Mia Wallace'},
        {id: 4, name: 'Butch Coolidge'},
        {id: 5, name: 'Mars Wallace'},
        {id: 6, name: ' Howard  Wolowitz'}
    ],
    messages: [
        {id: 1, message: 'Yo what\'up man'},
        {id: 2, message: 'Who is that Jules Winnfield?'},
        {id: 3, message: 'Hey, how are you?'},
        {id: 4, message: 'Oh my god go out'},
        {id: 5, message: 'Run baby'}
    ],
}

const dialogPageReducer = (state=initialState, action) => {

    switch (action.type) {
/*        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageText
                // this._callSubscriber(this._state)
            }*/
        case SEND_MESSAGE:
            let messageText = action.newMessageText
            return {
                ...state,
                messages:[ ...state.messages, {id: 6, message: messageText}]
            }
            // this._callSubscriber(this._state)
        default:
            return state
        }
    }




export const sendMessageActionCreator = (newMessageText) => {
    return {type: SEND_MESSAGE, newMessageText}
}
/*export const updateNewMessageTextActionCreator = (dialogMessage) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, messageText: dialogMessage}
}*/

export default dialogPageReducer
