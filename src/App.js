import React, { useState, useRef } from 'react';
import './App.css';

const drumEffects = [
  { keyboard: "Q", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", describeAudio: "Bass Boom", keyNumber: 81 },
  { keyboard: "W", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", describeAudio: "Drum pulse", keyNumber: 87 },
  { keyboard: "E", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", describeAudio: "Drum fills", keyNumber: 69 },
  { keyboard: "A", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", describeAudio: "Fillin", keyNumber: 65 },
  { keyboard: "S", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", describeAudio: "Failure drum", keyNumber: 83 },
  { keyboard: "D", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", describeAudio: "Golpe de aro", keyNumber: 68 },
  { keyboard: "Z", audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", describeAudio: "Cymbal and bass", keyNumber: 90 },
  { keyboard: "X", audio: "./hittin39-that-bass-11169.mp3", describeAudio: "Bass", keyNumber: 88 },
  { keyboard: "C", audio: "../public/audio/punch-boxing-02wav-14897.mp3", describeAudio: "Punch Boxing", keyNumber: 67 },
];



const SetDrumpad = (keyNames) => {
  const [sound, setSound] = useState("Play me!");
  const onButtonClick=(event)=>{
    setSound(event.target.name);
    const audioToPlay=event.target.firstElementChild;
    audioToPlay.play();
  };
  
  let drumpad = keyNames.map((keyName) =>
    <button
      className="drum-pad" id={"key" + keyName.keyboard} name={keyName.describeAudio} onClick={onButtonClick}>
      {keyName.keyboard}
      <audio className="clip" src={keyName.audio} id={keyName.keyboard} ></audio>
    </button>);
  return (
    <div>
      <h2>{sound}</h2>
      {drumpad}
    </div>);
};

//metodo para que tambien se active usando la tecla
// mejorar aspecto
//https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine


function App() {

  return (
    <div id="drum-machine" className="App">
      <div id="display">
        {SetDrumpad(drumEffects)}
      </div>
    </div>
  );
}

export default App;
