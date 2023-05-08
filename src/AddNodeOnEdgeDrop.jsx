import  { useCallback, useRef } from 'react';
import  { useContext } from "react";
import { Context } from "./Context";

import ReactFlow, {
  addEdge,
  useReactFlow,
} from 'reactflow';

import TextUpdaterNode from './TextUpdaterNode';

import 'reactflow/dist/style.css';


const nodeTypes = { textUpdater: TextUpdaterNode };



let id = 1;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = () => {
  const { 
    setIdx,
    nodes,
    setNodes,
    onNodesChange,
    edges,
    setEdges,
    onEdgesChange} = useContext(Context);
    const reactFlowWrapper = useRef(null);
    const connectingNodeId = useRef(null);
    const initialNodes = [
      { id: '0', type: 'input', position: { x: 300, y: 30 }, data: { value: 0,label: `SC1` } },
    ];

  const { project } = useReactFlow();
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {

        const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
        
        const newNode = {
          id,
          position: project({ x: event.clientX - left - 65, y: event.clientY - top }),
          data: { label: `Node ${id}` },
          type: 'textUpdater'
        };
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
        
      }
    
    },
    [project]
  );

  const createnode = () => {
    if(nodes.length==0){
      setNodes(initialNodes)
    }
else{
    const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
        const id = getId();
    const newNode = {
      id,
      position: project({ x: event.clientX - left - 0, y: event.clientY - top }),
      data: { label: `Node ${id}` },
      type: 'textUpdater'
    };
    setNodes((nds) => nds.concat(newNode));
    // setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
  }
  }
  return (
    <div className="wrapper" ref={reactFlowWrapper}>
      <button onClick={createnode}>createnode</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        onNodeClick={()=>{
          const selected = nodes.filter((item)=>item.selected)
          //deleteNodeById(selected[0].id)
          setIdx(selected[0].id)
          console.log(selected)
        }}
        nodeTypes={nodeTypes}
      
      />
    </div>
  );
};

export default AddNodeOnEdgeDrop;
