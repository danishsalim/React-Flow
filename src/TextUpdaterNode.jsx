import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import  { useContext } from "react";
import { Context } from "./Context";

function TextUpdaterNode() {

  const { idx,setNodes} = useContext(Context);

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-container" >
      <div className="text-updater-node">
        <Handle type="target" position={Position.Top} />
        <div className='elementx'>
          <div className="hidden" onClick={()=>setNodes((nds) => nds.filter((node) => node.id !== idx))} >X</div>
          <input  name="text" onChange={onChange} className="nodrag" placeholder='write here'/>
        </div>
        <Handle type="source" position={Position.Bottom} id="b"/>
      </div>
      
    </div>
  );
  
}

export default TextUpdaterNode;
