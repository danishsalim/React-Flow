
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from "./Context";

ReactDOM.createRoot(document.getElementById('root')).render(
  
     <CartProvider>
       <App />
     </CartProvider>

)
