import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../assets/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utilites/validators/validator";


const MaxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newMessageText' placeholder='Enter your new message' component={Textarea} validate={[required, MaxLength50 ]}  />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
    )
}


export default reduxForm({form:'dialogAddNewMessageForm'})(AddMessageForm)
