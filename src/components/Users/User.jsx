import Paginator from "../common/Paginator/Paginator";
import {NavLink} from "react-router-dom";
import smallUserPhoto from "../assets/ava/small.png";
import styles from "./User.module.css";


const User = ({user,followingInProgress,unfollow,follow,followed,...props}) => {
    return (
    <div>
        <span>
            <div>
                <NavLink to={`/profile/` + user.id}>
                <img src={user.photos.small != null ? user.photos.small : smallUserPhoto}
                     className={styles.smallUserPhoto}/>
                </NavLink>
            </div>

            <div>
                {user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                             onClick={() => {unfollow(user.id) }}>
                        Unfollow</button>
                    : <button disabled={followingInProgress
                        .some(id => id === user.id)} onClick={() => {
                        follow(user.id)}}>Follow</button>}
            </div>
        </span>

        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.country'}</div>
                <div>{'user.city'}</div>
            </span>
        </span>
    </div>)
}

export default User

