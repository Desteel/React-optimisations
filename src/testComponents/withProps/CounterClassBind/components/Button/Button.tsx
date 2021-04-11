import React, { PureComponent } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

class Button extends PureComponent<ButtonProps> {
  render() {
    const { children, onClick } = this.props;

    return <button onClick={onClick}>{children}</button>;
  }
}

export default Button;
