import React from "react";
import SongLibrary from "./songLibrary";

const Library = ({
  isplaying,
  songs,
  setCurrentSong,
  setSongs,
  audioRef,
  libraryStatus,
  setIsPlaying,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : " "}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <SongLibrary
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isplaying={isplaying}
            setSongs={setSongs}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
