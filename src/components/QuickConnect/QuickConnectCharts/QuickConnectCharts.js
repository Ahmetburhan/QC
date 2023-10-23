import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background, useReactFlow,
} from "reactflow";
import NodeConnection from "./Nodes/NodeConnection"
import "./QuickConnectCharts.css";
import 'reactflow/dist/style.css';


import CustomEdge from './Nodes/CustomEdge';
import QuickConnectNode,{QuickConnectNodeData} from "./Nodes/QuickConnectNode"
import { FiFile } from 'react-icons/fi';
import {Oracle, Port, GCP} from "./ProviderLogo/ProviderLogo";


const defaultViewport = { x: 0, y: 0, zoom: 0.75 };

const QuickConnectCharts = () => {
  const initialNodes: Node<QuickConnectNodeData>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { icon: <Port/>, title: 'Silicon Valley (SV1)', subline: 'gen-l2-perm-SV5-L-QinQ-BO-PRI' },
    type: 'quickconnect',
  },
  {
    id: '2',
    position: { x: 300, y: 0 },
    data: { icon: null,title: '50 MBs', subline: '15ms' },
    type: 'quickconnect',
  },
  {
    id: '3',
    position: { x: 0, y: 150 },
    data: { icon: <Port/>, title: 'Silicon Valley (SV1)', subline: 'gen-l2-perm-SV5-L-QinQ-BO-PRI' },
    type: 'quickconnect',
  },
  {
    id: '4',
    position: { x: 300, y: 150 },
    data: { icon: null,title: '50 MBs', subline: '15ms' },
    type: 'quickconnect',
  },
  {
    id: '5',
    position: { x: 550, y: 75 },
    data: { icon: <Oracle/>, title: 'Ashburn (us-east-1)', subline: 'Oracle Cloud Infrastructure' },
    type: 'quickconnect',
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
  },
];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

  const nodeTypes = {
  quickconnect: QuickConnectNode,
};
  const edgeTypes = {
  quickconnect: CustomEdge,
};
const defaultEdgeOptions = {
  type: 'quickconnect',
  markerEnd: 'edge-circle',
  markerStart: 'edge-circle'
};

  const { fitView } = useReactFlow();
  

  // this is set to always center nodes when a window resize happens 
const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

}
    window.addEventListener('resize', handleResize)
      return _ => {
      window.removeEventListener('resize', handleResize)
    
}
  })
  useEffect(()=>{
    fitView()
  },[dimensions.width])

  
  return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultViewport={defaultViewport}
        fitView
        snapGrid={true}
        panOnScroll={false}
        zoomOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
        attributionPosition="bottom-right"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
      >

      <svg >
      <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#ae53ba" />
            <stop offset="100%" stopColor="#2a8af6" />
          </linearGradient>

          <marker
            id="edge-circle"
            viewBox="-5 -5 14 14"
            refX="0"
            refY="0"
            markerUnits="strokeWidth"
            markerWidth="14"
            markerHeight="14"
            orient="auto"
          >
            <circle stroke="white" fill="#C3C9D5" strokeOpacity="0.75" r="1.5" cx="0" cy="0" />
          </marker>
        </defs>
</svg>

      </ReactFlow>
  );
};

export default QuickConnectCharts;
