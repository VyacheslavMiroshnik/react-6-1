import { Component } from "react";
import WatchesList from "./WatchesList";
import Form from "./Form";
export default class Watches extends Component {
  watches = [];

  state = {
    watches: this.watches,
  };

  add = (watch) => {
    this.watches.push(watch);
    this.setState({ watches: this.watches });
  };

  delete = (e, id) => {
    this.setState({
      watches: this.watches.filter((watch) => {
        return watch.id !== id;
      }),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="wrapper--inner">
          <Form onAdd={this.add} />
          <WatchesList list={this.state.watches} onDelete={this.delete} />
        </div>
      </div>
    );
  }
}
