import { useState, useRef, useEffect } from 'react';
import './App.css';
import drumEffects from './Constants/drumEffects';


const SetDrumpad= ()=> {
  const [sound, setSound] = useState("Play me!");
  
  const ref=useRef()

  useEffect(() => {
     ref.current.focus();
  }, []);


  const handleButtonClick=(event)=>{
    setSound(event.target.name);
    const audioToPlay=event.target.firstElementChild;
    audioToPlay.currentTime=0;
    audioToPlay.play();
  };

  const handleKeyDown=(event)=>{
    const keySelected= drumEffects.find(element=>element.keyNumber===event.keyCode);
    const audioToPlay=document.getElementById(keySelected.keyboard);
    const buttonSelected=audioToPlay.parentElement;
    buttonSelected.focus();
    audioToPlay.currentTime=0;
    audioToPlay.play();
    
  };
  
  const drumpad = ()=>{return drumEffects?.map((keyName) => (
    <button
      className="drum-pad" id={"key" + keyName.keyboard} name={keyName.describeAudio} onClick={handleButtonClick}>
      {keyName.keyboard}
      <audio className="clip" src={keyName.audio} id={keyName.keyboard} ></audio>
    </button>)
    )};

  return (
    <div ref={ref} tabIndex={0} onKeyDown={handleKeyDown}>
      <h2>{sound}</h2>
      {drumpad()}
    </div>);
};

function App() {
  return (
    <div  id="drum-machine" className="App">
      <div id="display">
        <SetDrumpad/>
      </div>
    </div>
  );
}

export default App;
