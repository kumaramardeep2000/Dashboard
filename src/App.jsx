import { useState } from "react";
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />  
      
    </div>
  );
}

export default App;
