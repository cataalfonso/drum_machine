
import "./style.css"

export default function DrumKey({onClick, keyboard, describeAudio, audio}){
    return(
        <button
          className="drum-pad" 
          id={"key" + keyboard} 
          name={describeAudio} onClick={onClick}>
          {keyboard}
          <audio className="clip" src={audio} id={keyboard} ></audio>
        </button>)
};