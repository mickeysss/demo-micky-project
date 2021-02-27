import React from "react";
import {getStatus, getUserProfile, lookingAJob, profileInfo, setProfile, setUserName, setUserProfile, updateStatus} from "../../redux/profilespage-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileInfo(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

        /*        getProfile(userId) .then(response => {
                    this.props.setUserProfile(response.data)
                    this.props.setUserName(response.data)
                    this.props.lookingAJob(response.data)

                })
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                    .then(response => {
                        this.props.setUserProfile(response.data)
                        this.props.setUserName(response.data)
                        this.props.lookingAJob(response.data)

                    })*/
    render() {
        return (
            <Profile
                isOwner = {!this.props.match.params.userId}
                {...this.props}
                 profileData={this.props.profileData}
                     // fullName={this.props.fullName}
                     // lookingForAJob={this.props.lookingForAJob}
                     // status={this.props.status}
                     // updateStatus={this.props.updateStatus}*/
            />

        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

/*let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})*/



let mapStateToProps = (state) => ({
    profileData: state.profilesPage.profileData,
    profileStatus: state.profilesPage.status,
    authorizedUserId: state.auth.isAuth,
    userId: state.auth.userId,
    isFetching: state.profilesPage.isFetching
})

/*let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)*/


export default compose(
    connect(mapStateToProps, {profileInfo,getStatus,updateStatus}),
    withRouter,withAuthRedirect)
(ProfileContainer)

/*
export default connect(mapStateToProps, {/!*setUserProfile,setUserName,lookingAJob,*!/getUserProfile})(withUrlDataContainerComponent)
*/

/*posts={props.profilesPage.posts}
  newPostText={props.profilesPage.newPostText}
  dispatch={props.dispatch}*/


// addPosts={props.addPosts}
// updatedNewText={props.updatedNewText}
/*
/>*/
