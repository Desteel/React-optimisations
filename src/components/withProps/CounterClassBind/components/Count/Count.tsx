import React, { Component } from "react";

type CountProps = {
  count: number;
};

class Count extends Component<CountProps> {
  render() {
    const { count } = this.props;

    return <div>CounterClassBind {count}</div>;
  }
}

export default Count;
