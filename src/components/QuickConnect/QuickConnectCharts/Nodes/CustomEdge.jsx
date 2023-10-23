import React from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  markerStart,
  animated
}: EdgeProps) {
  const xEqual = sourceX === targetX;
  const yEqual = sourceY === targetY;

  const [edgePath] = getBezierPath({
    // we need this little hack in order to display the gradient for a straight line
    sourceX: xEqual ? sourceX + 0.0001 : sourceX,
    sourceY: yEqual ? sourceY + 0.0001 : sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    animated
  });

  return (
    <>
      <path
        id={id}
        style={{
         strokeWidth: 4,
          stroke: '#C3C9D5', ...style}}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        markerStart={markerStart}
      />
    </>
  );
}
