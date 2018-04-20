import React from "react";

function Background({width, height}) {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="steelblue" />
    </svg>
  );
}

class App extends React.Component {
  state = {
    data: {}
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Background width={100} height={100} />
        <style jsx>{`
          .app {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
