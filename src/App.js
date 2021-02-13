import React, { useRef, useState } from "react";

import "./styles/app.scss";

import Player from "./component/Player";
import Songs from "./component/Songs";
import Library from "./component/Library";
import Nav from "./component/Nav";

import data from "./util";

function App() {
  //ref
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isplaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercent:0
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Songs currentSong={currentSong} />
      <Player
        isplaying={isplaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isplaying={isplaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
