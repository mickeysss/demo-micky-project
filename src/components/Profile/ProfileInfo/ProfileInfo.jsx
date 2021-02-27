import React from "react";
import s from './ProfileInfo.module.css'
import Prealoder from "../../common/Prealoder";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import smallPhoto from "../../assets/ava/small.png";

class ProfileInfo extends React.Component {

    render() {

        if (!this.props.profileData) {
            return <Prealoder/>
        } else if (this.props.isFetching === true) {
            return <Prealoder/>
        }

        return (
            <div className={s.content}>

                <div className={s.descriptionBlock}>

                    <img className={s.avatar} src={this.props.profileData.photos.large || smallPhoto} alt='img'/>
                    {this.props.isOwner && <input type={'file'}/>}

                    <div>
                        <ProfileStatusWithHooks {...this.props} />
                    </div>
                    <div>{this.props.profileData.fullName}</div>
                    <div>{this.props.profileData.lookingForAJob}</div>
                </div>
            </div>
        )
    }
}
        export default ProfileInfo
