import React from "react";
import {withScreenSize} from '@vx/responsive'
import { LinearGradient } from '@vx/gradient'

function Background({width, height}) {
  return (
    <svg width={width} height={height}>
      <LinearGradient id="fill" vertical={false}>
        <stop stopColor="#a943e4" offset="0%" />
        <stop stopColor="#f55989" offset="50%" />
        <stop stopColor="#ffaf84" offset="100%" />
      </LinearGradient>
      <rect width={width} height={height} fill="url(#fill)" />
    </svg>
  );
}

class App extends React.Component {
  state = {
    data: {}
  };

  render() {
    const { screenWidth, screenHeight } = this.props
    const { data } = this.state;
    return (
      <div>
        <Background width={screenWidth} height={screenHeight} />
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

export default withScreenSize(App);
