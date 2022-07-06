import drumEffects from '../../../Constants/drumEffects';
import { useState, useRef, useEffect } from 'react';
import DrumKey from '../DrumKey';

import "./style.css"

export default function Drumpad() {
    const [sound, setSound] = useState("Play me!");
    const ref = useRef()

    useEffect(() => {
        ref.current.focus();
    }, []);


    const handleButtonClick = (event) => {
        setSound(event.target.name);
        const audioToPlay = event.target.firstElementChild;
        audioToPlay.currentTime = 0;
        audioToPlay.play();
    };

    const handleKeyDown = (event) => {
        const keySelected = drumEffects.find(element => element.keyNumber === event.keyCode);
        const audioToPlay = document.getElementById(keySelected.keyboard);
        const buttonSelected = audioToPlay.parentElement;
        buttonSelected.focus();
        audioToPlay.currentTime = 0;
        audioToPlay.play();

    };

    return (
        <div id="drum-machine" className="App">
            <div id="display" ref={ref} tabIndex={0} onKeyDown={handleKeyDown}>
                <h2>{sound}</h2>
                {drumEffects?.map((keyName) =>
                    <DrumKey key={keyName.keyNumber} onClick={handleButtonClick} {...keyName} />
                )}
            </div>
        </div>);
};