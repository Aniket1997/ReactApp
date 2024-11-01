import React from "react";

class ComponentOne extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increase() {
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  }

  decrease() {
    this.setState((prev) => ({
      counter: prev.counter - 1,
    }));
  }

  render() {
    return (
      <>
        <button onClick={()=>this.increase()}>+</button>
        <span>{" "}{this.state.counter}{" "}</span>
        <button onClick={()=>this.decrease()}>-</button>
      </>
    );
  }
}

export default ComponentOne;
