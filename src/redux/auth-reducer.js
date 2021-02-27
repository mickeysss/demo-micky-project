import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA '
const TOGGLE_IS_FETCHING_AUTH = 'TOGGLE_IS_FETCHING_AUTH';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA :
            return {
                ...state,
                ...action.data,
            }
        case TOGGLE_IS_FETCHING_AUTH:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setAuthUserData= (userId, email, login,isAuth) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login,isAuth}})
/*export const loginAuthUser = (email,password,rememberMe) => ({type: SET_LOGIN_DATA,  data: {email,password,rememberMe}})*/


export const getAuthData = () => {
    return async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}
    export const login = (email, password, rememberMe) => async (dispatch) => {
         let response= await authAPI.login(email, password, rememberMe)
                if (response.data.resultCode === 0) {
                    dispatch(getAuthData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Somme error'
                    dispatch(stopSubmit('login',{_error: message}))
                }
    }
    export const logout = () => async (dispatch) => {
        let response= await authAPI.logout()
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
    }

export default authReducer
