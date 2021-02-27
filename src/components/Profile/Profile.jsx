import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts' ;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile

// {/*/*posts={props.profilesPage.posts}
// {/*   newPostText={props.profilesPage.newPostText}
// {/*   dispatch={props.dispatch}*/
//
//
//
//     {/* // addPosts={props.addPosts}*/}
//     {/* // updatedNewText={props.updatedNewText}*/}