import React from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

class App extends React.Component {
  state = {
    count: 0
  };

  increment = event => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  decrement = event => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {this.state.count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);
