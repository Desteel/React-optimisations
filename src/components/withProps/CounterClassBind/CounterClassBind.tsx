import React, { Component } from "react";
import Button from "./components/Button";
import Count from "./components/Count";

type CounterClassState = {
  count: number;
};

class CounterClassBind extends Component<{}, CounterClassState> {
  public state: CounterClassState;

  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0,
    };

    this.dec = this.dec.bind(this);
    this.inc = this.inc.bind(this);
  }

  private decWrapper() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  private incWrapper() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  private dec() {
    this.decWrapper();
  }

  private inc() {
    this.incWrapper();
  }

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

export default CounterClassBind;
