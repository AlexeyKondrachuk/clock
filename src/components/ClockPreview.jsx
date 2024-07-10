import React from 'react';
import '../App.css'

export default class ClockPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.getCurrentTime(this.props.clock.time)
    }
  }

  getCurrentTime = (timeZone) => {
    const curTz = new Date().getTimezoneOffset() * 60 * 1000;
    const tz = timeZone * 60 * 60 * 1000 + curTz;
    const mSeconds = new Date().getTime() + tz;
    
    return new Date(mSeconds).toLocaleTimeString()

    
    ;
  }

  timeOut = () => {
    this.setState({
      date: this.getCurrentTime(this.props.clock.time)
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.timeOut(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
 
  render() {
    return (
      <div className="Clock_wraper">
        <div className="wathes-head">
          <h5 className="title">{this.props.clock.name}</h5>
          <span className="clock-remove"
            onClick={() => this.props.handleRemove(this.props.clock.id)}>Удалить</span>
        </div>
        <div className="clock">
        <div className="wrap">
         <span className="hour" style={{transform: `rotate(${(this.state.date[0] + this.state.date[1])*30}deg)`}}></span>
         <span className="minute" style={{transform: `rotate(${(this.state.date[3] + this.state.date[4])*6}deg)`}}></span>
         <span className='second' style={{transform: `rotate(${(this.state.date[6] + this.state.date[7])*6}deg)`}}></span>
         <span className="dot"></span>
         <div className='logo'></div>
          </div>
          
          {console.log(this.state.date)}
        </div>
      </div>
    );
  }
}