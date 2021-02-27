
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilites/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_USER_FOLLOWING_PROGRESS = 'TOGGLE_USER_FOLLOWING_PROGRESS'

let initialState = {
    usersData: [],
    currentPage: 1,
    pageSize: 10,
    totalUsersCount: 0,
    isFetching: true,
    followingInProgress: []
}
const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed:true})
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed:false})
    }
        case SET_USERS: {
            return {
                ...state,
                usersData: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.usersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_USER_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: 'FOLLOW', userId})
export const unFollowSuccess = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsers = (users) => ({type: 'SET_USERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCount = (usersCount) => ({type: 'SET_TOTAL_USERS_COUNT', usersCount})
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: 'TOGGLE_USER_FOLLOWING', isFetching, userId})



export const getUsers = (pageSize,currentPage) => {
            return async (dispatch) => {
                dispatch(toggleIsFetching(true))
                let response = await usersAPI.getUsers(pageSize,currentPage)
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount))
            }
        }


export const followUnFollowFlow = async (dispatch, userId,usersAPI,actionCreator ) => {
        dispatch(toggleFollowingInProgress(true, userId))
        let response = await usersAPI(userId)
        if (response.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unFollow = (userId) => {
    return async (dispatch) => {
         followUnFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unFollowSuccess)

    }
}

export default usersPageReducer

