
import {  ReactFlowProvider} from 'reactflow';
import 'reactflow/dist/style.css';
import AddNodeOnEdgeDrop  from './AddNodeOnEdgeDrop';


const App = () => {
  return (
  <ReactFlowProvider>
   
      <>
        <AddNodeOnEdgeDrop />
      </> 
    
  </ReactFlowProvider>
  )
}

export default App
