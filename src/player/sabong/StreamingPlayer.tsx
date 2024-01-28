import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const StreamingPlayer = () => {
    const [videoURL, setVideoURL] = useState('');
    const [token, setToken] = useState('');
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    useEffect(() => {
        // Fetch the token from your authentication server
        axios.post('https://vvfwin.live/api/auth', {
            "password": "P@55w0rd5",
            "username": "jembakuga"
        })
            .then((response) => {
                console.log(response.data)
                console.log(response.data.token)
                setToken(response.data.token);
                axios.post(`https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8`, 
                { headers })
                .then((res) => {
                    console.log(res)
                })
            })
            .catch((error) => {
                console.error('Error fetching token:', error);
            });
    }, []);

    useEffect(() => {
        // Once the token is available, construct the video URL with the token
        if (token) {
            const streamingURL = `https://ohtanga1.b-cdn.net/LiveApp/streams/master.m3u8?token=${token}`;
            setVideoURL(streamingURL);
        }
    }, [token]);

    return (
        <div>
            {videoURL && (
                <ReactPlayer
                    url={videoURL}
                    controls={true}
                    width="100%"
                    height="auto"
                />
            )}
        </div>
    );
};

export default StreamingPlayer;
