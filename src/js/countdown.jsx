import React from 'react';
import Timer from './timer.jsx'

function Countdown() {
  var units = ['d', 'h', 'm', 's']
  var timeline = []
  for (var i = 0; i < 4; i++) {
    timeline.push(
      <TimerUnit unit={units[i]} key={i}/>
    );
  }
  return (
    <div id="countdown" class="section">
      <Timer />
      <hr/>
      <div className="timeUnits">
        {timeline}
      </div>
      <h1 id="countdown-heading">until hacking ends!</h1>
      <a className="main-button" href="https://root.treehacks.com/rooms">Reserve a room</a>
    </div>
  );
}

class TimerUnit extends React.Component {
  render() {
    return (
      <div className="timeUnit">
        <svg>
          <circle/>
        </svg>
        <br />
        {this.props.unit}
      </div>
    );
  }
}

export default Countdown;
