import React from 'react';

export class SimpleClock extends React.Component {
  constructor(props) {
    super(props);

    const currentTime = new Date();
    this.state = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am',
      on: true
    };
    
  }
  
  componentDidMount() {
    this.setTimer(); 
  }
  
  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  setTimer() {
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    if (!this.state.on) {
      return;
    }
    const currentTime = new Date();
    this.setState({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am',
      on: this.state.on
    }, this.setTimer);
  }

  toggleClock() {
   let state = this.state;
   state.on = !this.state.on
   this.setState(state, this.updateClock.bind(this));
  }

  render() {
    const {hours, minutes, seconds, ampm} = this.state;
    return (
      <div
        onClick={this.toggleClock.bind(this)}
        >
          {
            hours > 12 ? hours - 12 : hours
          }:{
            minutes < 10 ? `0${minutes}` : minutes
          }:{
            seconds < 10 ? `0${seconds}` : seconds
          }{ampm}
      </div>
    )
  }
}
