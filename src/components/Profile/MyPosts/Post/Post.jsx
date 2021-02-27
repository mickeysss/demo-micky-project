import React from "react";
import s from './Post.module.css'
const Post= (props)=> {
    return(
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/get-zen_doc/1878571/pub_5e820b5d8e05bc7f847fc0bc_5e821c51b4adff4ccdbf3176/scale_1200'/>
            {props.message}
        <div><span>Liked</span></div>{props.likes}

        </div>
    )
}

export default Post