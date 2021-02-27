import React from 'react'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css";
import Preloader from "../common/Prealoder";
import user from "../../redux/state";

const Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,users,...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totaUserCount={totalUsersCount} pageSize={pageSize} />
        <div className={styles.pageNav}>
            {
              users.map(user => <User user={user}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unFollow}
                                     follow={props.follow}
                                     key={user.id}
                                      currentPage={props.setCurrentPage}
                    />
                )
            }
        </div>
    </div>
}


export default Users

