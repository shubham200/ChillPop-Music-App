import React , {useState}from 'react';

import './styles/app.scss'


import Player from './component/player';
import Song from './component/songs';

import data from './util';



function App() {

// State

const [song,setSong] =useState(data());
const [currentSong,setCurrentSong] =useState(song[0]);
const [isplaying,setIsPlaying] =useState(false);


  return (
    <div className='title'>
    <Song  currentSong={currentSong}/>
    <Player
    isplaying={isplaying}
    setIsPlaying={setIsPlaying}
    currentSong={currentSong}
    
    />
    
    </div>
  );
}

export default App;
