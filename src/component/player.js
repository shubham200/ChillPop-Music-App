import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  isplaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
  songs,
  setSongs,
  setCurrentSong,
}) => {
  //useEffect

  useEffect(() => {
    // audioRef.current.play();
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
    if (isplaying) audioRef.current.play();
    
  }, [currentSong]);

  const playSongHandler = () => {
    if (isplaying) {
      audioRef.current.pause();
      setIsPlaying(!isplaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isplaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrentTime =Math.round(currentTime);
    const roundedDuration=Math.round(duration);
    const animationPercent=Math.round((roundedCurrentTime/roundedDuration)*100);
    console.log(animationPercent);
    setSongInfo({ ...songInfo, currentTime, duration,animationPercent });
  };
  const getTimeInfo = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const onChangeHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async(direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-right") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-left") {
      if ((currentIndex - 1) % songs.length === -1) {
         await setCurrentSong(songs[songs.length - 1]);
        return;
      }
     await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }

    // console.log(currentIndex);
  };



  const trackAnimation={
    transform:`translateX(${songInfo.animationPercent}%)`
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTimeInfo(songInfo.currentTime)}</p>
        <div style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={onChangeHandler}
            
          />
          <div style={trackAnimation} className="track-animate"></div>
        </div>

        <p>{songInfo.duration ? getTimeInfo(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-left")}
          className="fa-right"
          icon={faAngleDoubleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="fa-play"
          icon={isplaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-right")}
          className="fa-back"
          icon={faAngleDoubleRight}
        />
      </div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={() =>skipTrackHandler("skip-right")}
      />
    </div>
  );
};

export default Player;
