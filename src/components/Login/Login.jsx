import React from "react"
import {Field, reduxForm, stopSubmit} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import {Input} from "../assets/FormControls/FormControls";
import {required} from "../../utilites/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../assets/FormControls/FormControls.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'} placeholder={'Email'} component={Input}  validate={required} /></div>
            <div><Field name={'password'} type='password' placeholder={'Password'} component={Input} validate={required}  /></div>
            <div><Field name={'rememberMe'} type="checkbox" component={Input} validate={required} />remember me</div>
                {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <button>Login</button>
        </form>

    ) }

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)



const Login = (props) => {
    const onSubmit =(formData) => {
        props.login(formData.email,formData.password, formData.rememberMe)
    }
   if (props.isAuth) {
     return <Redirect to={'/profile'}/>
   }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

    export default connect (mapStateToProps, {login,logout}) (Login)
