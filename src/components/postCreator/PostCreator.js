import React, {useState} from 'react'
import './PostCreator.sass'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

function PostCreator() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{user}] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            authorPic: user.photoURL,
            authorName: user.displayName,
            optionalImg: imageUrl
        })

        setInput('');
        setImageUrl('');
    }

    return (
        <div className="postcreator">
            <div className="postcreator__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(e)=> setInput(e.target.value)} className="postcreator__input" type="text" placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} type="text" placeholder="Image Url (Optional)"/>
                    <button onClick={handleSubmit} type="submit" className="">Submit</button>
                </form>
            </div>
            <div className="postcreator__bottom">
                <div className="postcreator__bottom--option">
                    <VideocamIcon  style={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="postcreator__bottom--option">
                    <PhotoLibraryIcon  style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="postcreator__bottom--option nomob">
                    <InsertEmoticonIcon  style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default PostCreator
