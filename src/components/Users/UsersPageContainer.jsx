import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount, getUsers,toggleFollowingInProgress,
} from "../../redux/userspage-reducer"
import Users from "./Users";
import {compose} from "redux";

import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getFollowingInProgress,
    getTotalUsersCount, requestUsers,
} from "./users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber);
    }
    render() {

        return (
            <Users
                {...this.props}
            onPageChanged={this.onPageChanged}/>
        )


    }

}

const mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
    follow, unFollow,toggleFollowingInProgress, setUsers, setCurrentPage,getFollowingInProgress, setTotalUsersCount,getUsers}))
    (UsersContainer)
