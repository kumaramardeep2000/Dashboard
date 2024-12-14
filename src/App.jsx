import { useState } from "react";
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import "./App.css";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const Opensidebar = () =>{
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <div className="grid-container">
      <Header opensidebar={Opensidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} Opensidebar={Opensidebar} />
      <Home />  
      
    </div>
  );
}

export default App;
