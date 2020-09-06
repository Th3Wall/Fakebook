import React from 'react'
import './AddStory.sass'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddStory({ userAvatar }) {
    return (
        <div className="addstory addstory__wrp">
            <div className="addstory__avatar" style={{ backgroundImage: `url(${userAvatar})` }} alt=""></div>
            <div className="addstory__copywrp">
                <h4 className="addstory__copywrp--text">Create a story</h4>
                <div className="addstory__copywrp--icon">
                    <AddCircleIcon />
                </div>
            </div>
        </div>
    )
}

export default AddStory
