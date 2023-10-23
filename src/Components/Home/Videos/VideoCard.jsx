import React from 'react';

const VideoCard = ({ videoUrl, thumbnailUrl }) => (
    <div>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <img src={thumbnailUrl} alt="Video Thumbnail" />
        </a>
    </div>
);

export default VideoCard;
