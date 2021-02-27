import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilespage-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilites/validators/validator";
import {Textarea} from "../../assets/FormControls/FormControls";
// import {updatedNewText} from "../../../redux/state";

const maxLength10 = maxLengthCreator(10)


const addNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' placeholder='Add your post'  component={Textarea} validate={[required, maxLength10 ]} />
            </div>
            <div><button>Add your Post</button></div>
        </form>
}
 const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(addNewPostForm)

const MyPosts= (props)=> {
    let postElements =
        props.posts.map(p => <Post message={p.message} likes={p.likeCount}/>)

    // let linkToText = React.createRef()

    let onAddPosts = (values) => {
        props.addPosts(values.newPostText)
    }
//
//     let onAddPosts=() => {
//         // let textInProfile = linkToText.current.value
//         // props.dispatch(addPostActionCreator())
// props.addPosts(textInProfile);
//  }

    // let onPostChange = () => {
    //     let textInProfile = linkToText.current.value
    //     props.updateNewPostText(textInProfile)
    // // }
    // let onPostChange= () => {
    //     let textInProfile = linkToText.current.value
    //
    //   let action = updateNewPostTextActionCreator(textInProfile)
    //     props.dispatch(action)
    // // props.updatedNewText(textInProfile)
    // }

    return (

        <div className={s.postsBlock}>
            <div>
                <AddNewPostReduxForm onSubmit={onAddPosts}/>
            </div>
            <div>{postElements}</div>
        </div>
    )

}

export default MyPosts