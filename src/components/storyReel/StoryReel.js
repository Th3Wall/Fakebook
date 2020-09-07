import React from 'react'
import Story from '../story/Story'
import './StoryReel.sass';
import AddStory from '../addStory/AddStory';
import { useStateValue } from '../../StateProvider';

function StoryReel() {
    const [{user}] = useStateValue();

    return (
        <div className="stories">
            <AddStory userAvatar={user.photoURL} />
            <Story image="https://images.pexels.com/photos/4462786/pexels-photo-4462786.jpeg" authorPic="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/117907612_3563992490279505_8451429859961719128_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=v10vTrNDTuQAX_BOoTp&_nc_ht=scontent-mxp1-1.xx&oh=4886f877009445fd6742f10b84018eb7&oe=5F77D6B6" authorName="Davide Mandelli" />
            <Story image="https://images.pexels.com/photos/4873818/pexels-photo-4873818.jpeg" authorPic="https://images.generated.photos/ZD6JRE8uGrKmICH-wDvrn-MQ3am4ZZriA4V6ezTbuXQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNDI4MzQuanBn.jpg" authorName="Noemi Gilardi" />
            <Story image="https://images.pexels.com/photos/620334/pexels-photo-620334.jpeg" authorPic="https://images.generated.photos/0U5vP_6lPnD4gIDHcJx8zF__j93rWh-yD5DwwyiL8sE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NjQ4MjYuanBn.jpg" authorName="Mario Rossi" />
            <Story image="https://images.pexels.com/photos/5198758/pexels-photo-5198758.jpeg" authorPic="https://images.generated.photos/BrDRvr6gw3e02GEjf9-BEGw44s5qEOjff3B5agfU6lY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MTg5MDAuanBn.jpg" authorName="Giuseppe Verdi" />
            <Story image="https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg" authorPic="https://images.generated.photos/3ueJ9FAPIZ6AemZjtUUIRU6Gdk4Zr694ZVJFY_jB9tA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMjc5NjQuanBn.jpg" authorName="Claudio Bianchi" />
        </div>
    )
}

export default StoryReel
