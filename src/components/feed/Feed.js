import React, { useState, useEffect } from 'react'
import './Feed.sass'
import StoryReel from '../storyReel/StoryReel'
import PostCreator from '../postCreator/PostCreator'
import Post from '../post/Post'
import db from '../../firebase'

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))))
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <PostCreator />
            
            {posts.map((post) => (
                <Post
                    key={post.id}
                    authorPic={post.data.authorPic}
                    authorName={post.data.authorName}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                    optionalImg={post.data.optionalImg}
                />
            ))}
        </div>
    )
}

export default Feed
