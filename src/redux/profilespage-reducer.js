import {profileAPI} from "../api/api";

const ADD_POSTS = 'ADD-POSTS';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE '
const SET_USER_FULL_NAME = 'SET_USER_FULL_NAME'
const LOOK_FOR_A_JOB = 'LOOK_FOR_A_JOB '
const SET_USER_STATUS ='SET_USER_STATUS'
const UPDATE_USER_STATUS ='UPDATE_USER_STATUS'
const TOGGLE_IS_FETCHING_PROFILE ='TOGGLE_IS_FETCHING_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hello, have you seen movies with me?', likeCount: '675'},
        {id: 2, message: 'It\'s my first post man!', likeCount: '577'},
        {id: 3, message: 'You want to share some information?', likeCount: '553'},
        {id: 4, message: 'I love this network!', likeCount: '55'},
        {id: 5, message: 'How to delete sended messages?', likeCount: '133'}],
    profileData: null,
    profileStatus: '',
    isFetching: false

}


const profilesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSTS: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likeCount: 0
            }
            // let stateCopy = {...state}
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost)
            // stateCopy.newPostText = ''

            // this._callSubscriber(this._state)
        }

       /* case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            };
            // this._callSubscriber(this._state)
        }*/
        case SET_USER_PROFILE: {
            return {...state, profileData: action.profileData};
            // this._callSubscriber(this._state)
        }
        case TOGGLE_IS_FETCHING_PROFILE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_USER_FULL_NAME: {
            return {...state, fullName: action.fullName};
            // this._callSubscriber(this._state)
        }
        case LOOK_FOR_A_JOB: {
            return {...state, lookingForAJob: action.lookingForAJob};
            // this._callSubscriber(this._state)
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.profileStatus
            };
            // this._callSubscriber(this._state)
        }

            // this._callSubscriber(this._state)
        default:
            return state
    }
}


export const addPostActionCreator = (newPostText) => {
    return {type: ADD_POSTS, newPostText}
}

export const updateNewPostTextActionCreator = (textInProfile) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: textInProfile}
}
export const toggleIsFetchingProfile = (isFetching) => ({ type: TOGGLE_IS_FETCHING_PROFILE, isFetching });
export const setUserProfile = (profileData) => ({type: SET_USER_PROFILE, profileData})
export const setUserName = (fullName) => ({type: SET_USER_FULL_NAME, fullName})
export const lookingAJob = (lookingForAJob) => ({type: LOOK_FOR_A_JOB, lookingForAJob})
export const setUserStatus = (profileStatus) => ({type: SET_USER_STATUS, profileStatus})

export const profileInfo = (userId) => async (dispatch) => {
       const response = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
            dispatch(setUserName(response.data))
            dispatch(lookingAJob(response.data))
    }

export const getStatus = (userId) => async (dispatch) => {
        let response= await profileAPI.getUserStatus(userId)
            dispatch(setUserStatus(response.data))
    }
export const updateStatus = (status) => async (dispatch) => {
      let response = await profileAPI.updateUserStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
    }


export default profilesPageReducer

