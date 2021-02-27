import {applyMiddleware, combineReducers, createStore} from "redux";
import profilesPageReducer from "./profilespage-reducer";
import dialogPageReducer from "./dialogspage-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersPageReducer from "./userspage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilesPage: profilesPageReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sideBarReducer,
    usersPage: usersPageReducer,
    auth:authReducer,
    app: appReducer,
    form: formReducer
   })

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store

export default store