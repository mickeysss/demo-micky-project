import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserData} from "../../redux/auth-reducer";
import {getHeaderLogin} from "../../api/api";

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.setAuthUserData()

/*        getHeaderLogin() .then(data => {
            if(data.resultCode===0) {
                let {id,email,login} = data.data
                this.props.setAuthUserData(id,email,login)
            }
        })*/
/*      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id,email,login} = response.data.data
                    this.props.setAuthUserData(id,email,login)
                }
            // })}*/

    render() {
         return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout}) (HeaderContainer)