import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RoomNameForm from './components/RoomNameForm';
import ActiveRoomControls from './components/ActiveRoomControls';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {identity:null, currentRoomName:""}
    this.isInRoom = this.isInRoom.bind(this);
  }

  componentDidMount(){
    /*
    fetch('/token')
    .then((data)=>{
      this.setState({identity:data.identity});
    })
    .catch((error)=>{
      console.error(error);
    });
    */
  }
  render(){
    const roomControls = this.isInRoom() ? <ActiveRoomControls roomName={this.state.currentRoomName} onLeaveRoomClicked={this.onLeaveClicked.bind(this)} /> : <RoomNameForm onJoinClicked={this.onJoinClicked.bind(this)} />;
    return(
      <div>
        <div id="remote-media"></div>
        <div id="controls">
          <div id="preview">
            <p className="instructions">Hello Beautiful</p>
            <div id="local-media"></div>
            <button id="button-preview">Preview My Camera</button>
          </div>
          
            {roomControls}
          
          <div id="log"></div>
        </div>
      </div>
    );
  }

  onLeaveClicked(){

  }

  onJoinClicked(){
    log("Joining room '" + roomName + "'...");
    var connectOptions = {
      name: roomName,
      logLevel: 'debug'
    };

    if (previewTracks) {
      connectOptions.tracks = previewTracks;
    }

    // Join the Room with the token from the server and the
    // LocalParticipant's Tracks.
    Video.connect(data.token, connectOptions).then(roomJoined, function(error) {
      log('Could not connect to Twilio: ' + error.message);
    });
  }

  isInRoom(){
    return this.state.currentRoomName.length > 0;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);