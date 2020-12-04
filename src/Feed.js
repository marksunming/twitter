import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import db from './firebase'
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            })))
        });

        return () => {
            unsubscribe();
        }
    },[]);



    return (
        <div className='feed'>
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            
            <TweetBox />

            <FlipMove>
                {
                    posts.map(post => (
                        <Post 
                            displayName={post.data.displayName}
                            username={post.data.username}
                            verified={post.data.verified}
                            timestamp={post.data.timestamp}
                            text={post.data.text}
                            image={post.data.image}
                            avatar={post.data.avatar}
                            key={post.id}
                        />
                    ))
                }
            </FlipMove>

        </div>
    )
}

export default Feed
