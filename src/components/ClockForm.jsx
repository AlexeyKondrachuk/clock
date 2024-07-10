import React from 'react';

export default class ClockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        time: ''
      }
    }
  }

  inputName = (ev) => {
    this.setState({
      value: {
        name: ev.target.value,
        time: this.state.value.time
      }
    });
  }

  inputTimeZone = (ev) => {
    this.setState({
      value: {
        name: this.state.value.name,
        time: ev.target.value
      }
    });
  }

  render() {
    return (
      <form className="form">
        <div className="input-name">
          <label htmlFor="name">Название</label>
          <input type="text" name="name"
            value={this.state.value.name}
            onChange={this.inputName} />
        </div>
        <div className="input-timezone">
          <label htmlFor="timezone">Временная зона</label>
          <input type="number" name="timezone"
            value={this.state.value.time}
            onChange={this.inputTimeZone} />
        </div>
        <button className="form-btn" type="button" onClick={() => {
          this.props.handleAddClock(this.state.value)
          this.setState({
            value: {
              name: '',
              time: ''
            }
          })
        }}>Добавить</button>
      </form>
    );
  }
}