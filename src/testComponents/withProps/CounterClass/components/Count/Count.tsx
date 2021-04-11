import React, { Component } from "react";

type CountProps = {
  count: number;
};

class Count extends Component<CountProps> {
  render() {
    const { count } = this.props;

    return <div>CounterClass {count}</div>;
  }
}

export default Count;
