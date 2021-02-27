import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilespage-reducer";
import MyPosts from "./MyPosts";
import ContextStore from "../../../ContextStore";
import store from "../../../redux/redux-store";
import {createStore} from "redux";
import {connect} from "react-redux";
// import {updatedNewText} from "../../../redux/state";


// const MyPostsContainer= (props) => {
//     // let state = props.store.getState()
//     //
//     // let addPosts=() => {
//     //     props.store.dispatch(addPostActionCreator())
//     // }
//     //
//     // let onPostChange= (textInProfile) => {
//     //     let action = updateNewPostTextActionCreator(textInProfile)
//     //     props.store.dispatch(action)
//     // }
//
//     return(
//         <ContextStore.Consumer>
//         { (store) =>{
//             let state = store.getState()
//             let addPosts=() => {
//                 store.dispatch(addPostActionCreator())
//             }
//             let onPostChange= (textInProfile) => {
//                 let action = updateNewPostTextActionCreator(textInProfile)
//                 store.dispatch(action)
//             }
//             return < MyPosts updateNewPostText={onPostChange} addPosts={addPosts}  posts={state.profilesPage.posts}
//             newPostText={state.profilesPage.newPostText}/>
//         }
//     }
//         </ContextStore.Consumer>
//     )
// }

const mapToStateProps = (state) => {
    return {
        posts: state.profilesPage.posts,
        newPostText: state.profilesPage.newPostText
    }
}
const mapToDispatchProfile = (dispatch) => {
    return {
        updateNewPostText: (textInProfile) => {
            let action = updateNewPostTextActionCreator(textInProfile)
            dispatch(action)
        },
        addPosts: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


const MyPostsContainer= connect(mapToStateProps, mapToDispatchProfile) (MyPosts)



export default MyPostsContainer