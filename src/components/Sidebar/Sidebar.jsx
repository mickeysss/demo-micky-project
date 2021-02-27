import React from "react";
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings' activeClassName={s.activeLink}>Settings</NavLink></div>
            <div className={s.bigItem}>
                <NavLink to='friends' activeClassName={s.activeLink}>Friends:</NavLink>
            </div>
            <div className={s.bigItem}>
                <div>
                    <img src='https://i.pinimg.com/originals/e0/6c/74/e06c740e8e6aec4aa651a7fb44f83623.jpg'/>
                    <span>Mars Wallace</span>
                </div>
                <div>
                <img src='https://i.pinimg.com/originals/7e/b9/eb/7eb9eb3995e4e962d3992f8e0392c255.jpg'/>
                    <span>Mia Wallace</span>
                </div>
                <div>
                <img src='https://i.pinimg.com/originals/88/9f/2e/889f2e495168b123bd2a34a7e43a2aaa.png'/>
                    <span>Jules Winnfield</span>
                </div>

            </div>
        </nav>

    )
}

export default Nav