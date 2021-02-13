import React from 'react'

const Songs = ({currentSong}) => {
    return (
        <div className="song-container">
        <img src={currentSong.cover} alti={currentSong.name} />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
            
        </div>
    )
}

export default Songs;