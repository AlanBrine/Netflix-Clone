
import { Globalstyle } from './assets/styles/Globalstyle';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home'

function App() {
  return (
    <>
      <Globalstyle/>
      <Router >
        <Routes>
          <Route path="/" element={ <Home />} />
        
        </Routes>
      </Router> 
     
      
    </>
  );
}

export default App;
