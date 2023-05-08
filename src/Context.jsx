import  { createContext, useState } from "react";
import  {
  useNodesState,
  useEdgesState,
} from 'reactflow';

export const Context = createContext();

const CartProvider = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [idx, setIdx] = useState(0);

  return (
    <Context.Provider
      value={{
        idx,
        setIdx,
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CartProvider;
