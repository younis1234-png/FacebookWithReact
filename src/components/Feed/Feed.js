import React, {useState, useEffect} from 'react'
import "./Feed.css"
import StoryReel from "../Feed/storyReel/StoryReel"
import MessageSender from "./MessageSender//MessageSender"
import Post from "./Post/Post"
import db from './../../firebase'


function Feed ()
{
    const [posts, setPosts] = useState([]);

    useEffect( () =>
    {
        // pull everything form our database
      db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
      })
    }, [] )

    
    return (
        <div className="feed">
            {/* StoryRow */ }
            <StoryReel />
            {/* MessageSender */ }
            <MessageSender />
            {/* POST */ }
            {/* map through every single post  and return the following */}
            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
                ))}
        </div>
    )
}

export default Feed
