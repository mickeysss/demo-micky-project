import React from "react";
import  s from './Header.module.css'
import {NavLink} from "react-router-dom";
import HeaderContainer from "./HeaderContainer";


const Header = (props) => {
    return <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dO__jcdyOasaw8gj4T9w5OLmG70f2TxhKg&usqp=CAU'/>

            <div className={s.loginBlock}>
                {props.isAuth ?
                   <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'./login'}>Login</NavLink>}
            </div>
        </header>

}

export default Header