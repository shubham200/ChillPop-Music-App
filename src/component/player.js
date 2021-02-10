import React,{useRef,useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleDoubleLeft,faAngleDoubleRight,faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong,isplaying,setIsPlaying}) => {

    const audioRef=useRef(null);
    const playSongHandler=()=>{
        if(isplaying)
        {   
            audioRef.current.pause();
            setIsPlaying(!isplaying)
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isplaying)
        }

    } 

    const timeUpdateHandler =(e)=>{
        const currentTime =e.target.currentTime;
        const duration=e.target.duration;
        setSongInfo({...songInfo,currentTime,duration});
    }
    const getTimeInfo=(time)=> {
        return Math.floor(time/60)+":"+("0"+Math.floor(time%60)).slice(-2);
    }
    const [songInfo,setSongInfo] =useState({
        currentTime:null,
        duration:null
    });

    return (
        <div className="player">
        <div className="time-control">
        <p>{getTimeInfo(songInfo.currentTime)}</p>
        <input type="range" 
        min={0}
        max={songInfo.duration}
        value={songInfo.currentTime}
        
        />
        <p>{getTimeInfo(songInfo.duration)}</p>
        
        </div>
        <div className="play-control">
        <FontAwesomeIcon className="fa-right" icon={faAngleDoubleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler} className="fa-play" icon={faPlay}/>
        <FontAwesomeIcon className="fa-back" icon={faAngleDoubleRight} />
        </div>
            <audio ref={audioRef}  
            src={currentSong.audio} 
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            />
        </div>
    )
}

export default Player;