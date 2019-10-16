import React from 'react';

import './App.css';
const sounds1 = [
  {
    id: 1,
    button: "Q",
    name: "Heater 1",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: 2,
    button: "W",
    name: "Heater 2",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: 3,
    button: "E",
    name: "Heater 3",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: 4,
    button: "A",
    name: "Heater 4",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: 5,
    button: "S",
    name: "Heater 6",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: 6,
    button: "D",
    name: "Dsc Oh",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: 7,
    button: "Z",
    name: "Kick n Hat",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: 8,
    button: "X",
    name: "RP4 KICK",
    link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: 9,
    button: "C",
    name: "Cev H2",
    link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const padStyle = {
  display: "flex",
  background: "#873600",
  height: "23vh",
  margin: "1vh",
  border: "0.05vw solid #333",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10vh",
  borderRadius:"3vh",
  color:'#333',
  fontFamily:'"Courier New", Courier, monospace'
};
const pressedStyle = {
  display: "flex",
  background: "#873600",
  height: "23vh",
  margin: "1vh",
  border: "0.05vw solid #333",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10vh",
  borderRadius:"3vh",
  color:'#333',
  fontFamily:'"Courier New", Courier, monospace'
};
class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.playAudio = this.playAudio.bind(this);
  }
  playAudio() {
    var a = document.getElementById(this.props.id);
    a.play();
  }

  render() {
    return (
      <div
        style={padStyle}
        className="drum-pad"
        id={this.props.name}
        onClick={this.playAudio}
      >
        <audio id={this.props.id} className="clip" src={this.props.link} />
        <p>{this.props.id}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastKey: ""
    };
    this.lastPressed = this.lastPressed.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  lastPressed(e) {
    if(e.target.id !=="drum-Area"){
    this.setState({
      lastKey: e.target.id
    });}
  }
  
  handleKeyPress(event) {

    let playId = "";  
    switch(event.keyCode){
      case 81:
        playId = "Heater 1";
        break;
      case 87:
        playId = "Heater 2";
        break;
      case 69:
        playId = "Heater 3";
        break;
      case 65:
        playId = "Heater 4";
        break;
      case 83:
        playId = "Heater 6";
        break;
      case 68:
        playId = "Dsc Oh";
        break;
      case 90:
        playId = "Kick n Hat";
        break;
      case 88:
        playId = "RP4 KICK";
        break;
      case 67:
        playId = "Cev H2";
        break;
      default: 
        playId = "";
    }
    if(playId !== "") document.getElementById(playId).click();
  }
  
 componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, { passive: true});
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, { passive: true});
  }

  render() {
    const drums = sounds1.map(x => {
      return <DrumPad name={x.name} id={x.button} link={x.link} />;
    });

    return (
      <div id="drum-machine" className="container">
        <div id="drum-Area" onClick={this.lastPressed}>{drums}</div>
        <div id="display">
          <div id="texts">
            <p>{this.state.lastKey}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
