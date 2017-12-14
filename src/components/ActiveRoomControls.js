import React, { Component } from 'react';

class ActiveRoomControls extends Component{
  render(){
    return(
      <div>
        <p class="instructions">Room Name:</p>
        <div>{this.props.roomName}</div>
        <button onClick={this.props.onLeaveRoomClicked} >Leave Room</button>
      </div>
    );
  }
}

export default ActiveRoomControls;