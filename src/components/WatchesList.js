import { Component } from "react";
import Watch from "./Watch";

export default class WatchesList extends Component {
  render() {
    return (
      <div className="watches">
        {this.props.list.map((item) => (
          <Watch key={item.id} item={item} onDelete={this.props.onDelete} />
        ))}
      </div>
    );
  }
}
