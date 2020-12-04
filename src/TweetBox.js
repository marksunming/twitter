import { Avatar, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './TweetBox.css'
import db from './firebase'
import firebase from 'firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetUrl, setTweetUrl] = useState('');

    const addPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Rafeh Qazi",
            username: "@cleverqazi",
            avatar: 'https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0xffffffff-no-rj-mo',
            image: tweetUrl,
            text: tweetMessage,
            verified: 'false',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setTweetMessage('');
        setTweetUrl('');
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s48-c-k-c0xffffffff-no-rj-mo' />
                    <input 
                        value={tweetMessage}
                        onChange={e => setTweetMessage(e.target.value)}
                        type="text" 
                        placeholder="What's happening?" 
                    />
                </div>

                <input 
                    className='tweetBox__imageInput' 
                    type="text" 
                    placeholder="Optional: Enter image URL" 
                    value={tweetUrl}
                    onChange={e => setTweetUrl(e.target.value)}
                />
                <Button type='submit' onClick={addPost} className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
