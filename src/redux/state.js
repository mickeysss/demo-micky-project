
// const ADD_POSTS = 'ADD-POSTS';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
// const SEND_MESSAGE = 'SEND-MESSAGE'


import profilesPageReducer from "./profilespage-reducer";
import dialogPageReducer from "./dialogspage-reducer";

let store = {
    _state: {
        friendsList:{
            friends:[
                {id: 1, name: 'Mars Wallace'},
                {id: 2, name:'Mia Wallace' },
                {id: 3, name: 'Jules Winnfield'}
            ]
        },
        profilesPage:{
            newPostText: ' ',
            posts: [
                {id: 1, message: 'Hello, have you seen movies with me?', likeCount: '675'},
                {id: 2, message: 'It\'s my first post man!', likeCount: '577'},
                {id: 3, message: 'You want to share some information?', likeCount: '553'},
                {id: 4, message: 'I love this network!', likeCount: '55'},
                {id: 5, message: 'How to delete sended messages?', likeCount: '133'}],
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        usersPage: {
            users: [
                {id:1, followed:true,  name: 'Chad Limpsea', city: 'York', country: 'UnitedKingdom'},
                {id:2, followed:false, name: 'Billy Hilmor', city: 'York', country: 'United Kingdom'},
                {id:3, followed:true,  name: 'Thomas Shelby', city: 'York', country: 'United Kingdom'},
                {id:4, followed:false, name: 'Freddie Thorne', city: 'York', country: 'United Kingdom'},
                {id:5, followed:true,  name: 'Arthur Shelby', city: 'York', country: 'United Kingdom'}
            ]
        }
    },
    getState() {
       return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilesPage = profilesPageReducer(this._state.profilesPage, action)
        // type: 'ADD-POSTS'
    //     if (action.type === ADD_POSTS) {
    //         let newPost = {
    //             id: 5,
    //             message: this._state.profilesPage.newPostText,
    //             likeCount: 0
    //         }
    //         this._state.profilesPage.posts.push(newPost)
    //         this._state.profilesPage.newPostText = ''
    //         this._callSubscriber(this._state)
    //     }
    // else
    //     if (action.type === UPDATE_NEW_POST_TEXT) {
    //
    //         this._state.profilesPage.newPostText = action.newText;
    //         this._callSubscriber(this._state)
    //
        this._state.dialogsPage= dialogPageReducer(this._state.dialogsPage,action)
    //     } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //         this._state.dialogsPage.newMessageText = action.messageText
    //         this._callSubscriber(this._state)
    //
    //     } else if (action.type === SEND_MESSAGE) {
    //         let messageText = this._state.dialogsPage.newMessageText
    //         this._state.dialogsPage.newMessageText = ''
    //         this._state.dialogsPage.messages.push({id: 6, message: messageText})
            this._callSubscriber(this._state)
    //     }
    //     siderbarReducer()
    }
    }


    // addPosts() {
    //     let newPost = {
    //         id:5,
    //         message: this._state.profilesPage.newPostText,
    //         likeCount:0
    //     }
    //     this._state.profilesPage.posts.push(newPost)
    //     this._state.profilesPage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // updatedNewText(newText) {
    //     this._state.profilesPage.newPostText=newText
    //     this._callSubscriber(this._state)
    // },



export default store

window.state = store