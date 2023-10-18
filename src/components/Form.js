import { Component } from "react";
import { nanoid } from "nanoid";

export default class Form extends Component {
  state = {
    title: "",
    timeOffset: "",
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleTimeOffset = (e) => {
    this.setState({ timeOffset: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.id = nanoid();
    this.props.onAdd({
      id: this.id,
      title: this.state.title,
      timeOffset: this.state.timeOffset,
    });
    this.setState({
      title: "",
      timeOffset: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Название</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="timeZone">Введите часовой пояс GMT+</label>
            <input
              type="text"
              id="timeZone"
              name="timeZone"
              value={this.state.timeOffset}
              onChange={this.handleTimeOffset}
            />
          </div>
          <div className="form-group">
            <button type="submit">Добавить</button>
          </div>
        </div>
      </form>
    );
  }
}
