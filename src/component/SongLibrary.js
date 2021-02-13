import React from "react";

const SongLibrary = ({ setIsPlaying,isplaying,song,songs,setSongs,id,setCurrentSong,audioRef }) => {

  const songSelectHandler=async()=>{
      // const selectedSong=songs.filter(state=>state.id===id);
      await setCurrentSong(song);

      const newSongs=songs.map((song)=>{
        if(song.id===id)
        {
          return {
            ...song,
            active: true
          }
        }
        else{
          return {
            ...song,
            active: false
          }
        }
      })

        setSongs(newSongs)
      if(isplaying) {
        audioRef.current.play();
      }
      else
      {
        setIsPlaying(!isplaying);
        audioRef.current.play();
      }


  }
  return (
    <div onClick={songSelectHandler}className={`song-library ${song.active ? "selected" :""}`}>
      <img src={song.cover} alti={song.name} />
      <div className="song-description">
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default SongLibrary;
