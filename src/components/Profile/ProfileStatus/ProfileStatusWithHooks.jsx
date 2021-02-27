import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.profileStatus)

    useEffect(() => {
        setStatus(props.profileStatus)
    }, [props.profileStatus])

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

        return (
            <div>
                {!editMode &&
                <span onDoubleClick={activateEditMode}>{props.profileStatus ? props.profileStatus : 'Change status'} </span>
                }
                {editMode &&
                    <input onBlur={deactivateEditMode} onChange={onStatusChange} autoFocus={true} value={status} type='text'/>
                }
            </div>
        )
}
export default ProfileStatusWithHooks