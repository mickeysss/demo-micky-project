import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersPageContainer from "./components/Users/UsersPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthData, setAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Prealoder";
import {withRouter} from 'react-router-dom'


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}
                        // profilesPage = {props.state.profilesPage}
                        // newPostText = {props.state.profilesPage.newPostText}
                        // dispatch={props.dispatch}
                        /* addPosts={props.addPosts}
                           updatedNewText={props.updatedNewText} */  />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}
                        // messages={props.state.dialogsPage}
                        /*state= {props.state.dialogsPage}*/ />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' render={() => <UsersPageContainer store={this.props.store}/>}/>
                    <Route path='/login' render={() => <Login/>}/>


                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    connect(mapStateToProps, {initializeApp,getAuthData}),
    withRouter
)(App);

