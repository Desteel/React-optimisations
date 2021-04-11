import React, { Component } from "react";
import Button from "./components/Button";
import Count from "./components/Count";

type CounterClassState = {
  count: number;
};

class CounterClass extends Component<{}, CounterClassState> {
  public state: CounterClassState;

  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0
    };
  }

  private dec = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  private inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <Button onClick={this.dec}>-</Button>
        <Count count={count} />
        <Button onClick={this.inc}>+</Button>
      </div>
    );
  }
}

export default CounterClass;
