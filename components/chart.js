import { withParentSize } from "@vx/responsive";

function Chart({ parentWidth, parentHeight }) {
  const margin = {
    top: 15,
    bottom: 40,
    left: 0,
    right: 0
  }

  const width = parentWidth - margin.left - margin.right;
  const height = parentHeight - margin.top - margin.bottom;

  return (
    <div>
      <svg width={parentWidth} height={parentHeight}>
        <rect width={parentWidth} height={parentHeight} fill="steelblue" />
      </svg>
    </div>
  );
}

export default withParentSize(Chart);
