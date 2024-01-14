import React, {useState} from 'react';
import Buttons from './comp/Buttons';
import Heading from './comp/Heading';
import './App.css';

function App() {
    const color = ["green", "red", "yellow", "blue"]
    const [game, setGame] = useState(false);
    const [level, setLevel] = useState(0);
    var [levelSeq, setLevelSeq] = useState(0);
    var [gameSeq, setGameSeq] = useState([]);
    function gamePlay() {
        var varNum = Math.floor(Math.random()*4)
        var selectedColor = color[varNum]
        let arr = gameSeq;
        arr.push(selectedColor);
        setGameSeq(arr);
        setTimeout(function(){
            var audio = new Audio(require("./assets/" + selectedColor + ".mp3"))
            audio.play();
            document.getElementById(selectedColor).classList.add("blink");
        setTimeout(function(){
            document.getElementById(selectedColor).classList.remove("blink");
        }, 500);
        }, 500)
    }

    var headingClick = () => {
        if (!game){
            setLevel(1);
            setLevelSeq(0);
            setGame(true);
            gamePlay();
            console.log(gameSeq);
        }
    }

    var butClick = e => {
        var i = e.target.id;
        e.target.classList.add("pressed");
        setTimeout(function(){
            e.target.classList.remove("pressed")
        }, 100)
        var btnAudio = new Audio(require("./assets/" + i + ".mp3"))
        btnAudio.play()
        console.log(gameSeq[levelSeq]);
        switch (gameSeq[levelSeq]) {
            case i:
                if ((levelSeq+1) === gameSeq.length){
                    setLevelSeq(0);
                    setLevel(level+1);
                    gamePlay();
                    console.log(gameSeq);
                }
                else if ((levelSeq+1) < gameSeq.length) {
                    setLevelSeq(levelSeq+1);
                }
                console.log("Correct");
                break;
            default:
                console.log("Wrong");
                gameOver();
                break;
        }
    }

    var gameOver = () => {
        var audio = new Audio(require("./assets/wrong.mp3"));
        audio.play();
        setGame(false);
        setLevel(-1);
        setGameSeq([])
    }

    return(
        <>
            <Heading click = {headingClick} level = {level} />
            <div className='container'>
                <Buttons color1 = {color[0]} color2 = {color[1]} onclick = {butClick} />
                <Buttons color1 = {color[2]} color2 = {color[3]} onclick = {butClick} />
            </div>
        </>
    )
}

export default App;
