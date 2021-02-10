import React from 'react'

const songs = ({currentSong}) => {
    return (
        <div className="song-container">
        <img src={currentSong.cover}/>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
            
        </div>
    )
}

export default songs;