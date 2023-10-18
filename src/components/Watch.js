import { Component } from "react";

export default class Watch extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.item = props.item;
    this.delete = props.onDelete;
    this.hours =
      this.state.time.getHours() + Number(this.props.item.timeOffset);
    this.minutes = this.state.time.getMinutes();
    this.seconds = this.state.time.getSeconds();
    this.hourArrow = `rotate(${this.hours * 30}deg)`;
    this.minuteArrow = `rotate(${this.minutes * 6}deg)`;
    this.secondArrow = `rotate(${this.seconds * 6}deg)`;
  }

  /*
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.item = props.item;
    this.delete = props.onDelete;
    this.hours = this.state.time.getHours();
    this.minutes = this.state.time.getMinutes();
    this.seconds = this.state.time.getSeconds();
    this.hourArrow = `rotate(${(this.hours + 3) * 30}deg)`;
    this.minuteArrow = `rotate(${this.minutes * 6}deg)`;
    this.secondArrow = `rotate(${this.seconds * 6}deg)`;
  }
*/
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date() });
      this.hours =
        this.state.time.getHours() + Number(this.props.item.timeOffset);
      this.minutes = this.state.time.getMinutes();
      this.seconds = this.state.time.getSeconds();
      this.hourArrow = `rotate(${this.hours * 30}deg)`;
      this.minuteArrow = `rotate(${this.minutes * 6}deg)`;
      this.secondArrow = `rotate(${this.seconds * 6}deg)`;
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock" data-clock-id={this.item.id}>
        <div className="title">{this.item.title}</div>
        <div
          className="delete"
          onClick={(e) => {
            this.delete(e, this.item.id);
          }}
        >
          X
        </div>
        <div className="hero-circle">
          <div className="hero-face">
            <div
              className="hand hour"
              style={{ transform: this.hourArrow }}
            ></div>
            <div
              className="hand minute"
              style={{ transform: this.minuteArrow }}
            ></div>
            <div
              className="hand second"
              style={{ transform: this.secondArrow }}
            ></div>
            <div className="center"></div>
          </div>
        </div>
      </div>
    );
  }
}
