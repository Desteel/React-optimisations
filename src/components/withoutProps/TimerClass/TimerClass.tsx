import React, { Component } from "react";

type TimerClassState = {
  date: Date;
};

class TimerClass extends Component<{}, TimerClassState> {
  public state: TimerClassState;

  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const { date } = this.state;

    return <div>TimerClass {date.toLocaleTimeString()}</div>;
  }
}

export default TimerClass;
