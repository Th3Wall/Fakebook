import React from 'react'
import './Feed.sass'
import StoryReel from '../storyReel/StoryReel'
import PostCreator from '../postCreator/PostCreator'
import Post from '../post/Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <PostCreator />
            <Post
                authorPic="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/117907612_3563992490279505_8451429859961719128_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=v10vTrNDTuQAX_BOoTp&_nc_ht=scontent-mxp1-1.xx&oh=4886f877009445fd6742f10b84018eb7&oe=5F77D6B6"
                authorName="Davide Mandelli"
                message="Example post"
            />
            <Post
                authorPic="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/117907612_3563992490279505_8451429859961719128_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=v10vTrNDTuQAX_BOoTp&_nc_ht=scontent-mxp1-1.xx&oh=4886f877009445fd6742f10b84018eb7&oe=5F77D6B6"
                authorName="Davide Mandelli"
                message="Hey, nice first post"
                optionalImg="https://images.pexels.com/photos/3150553/pexels-photo-3150553.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
        </div>
    )
}

export default Feed
