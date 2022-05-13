import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes,  Route } from "react-router-dom";

import Load from './components/git_search/load';
import View from './components/repo_view/view';



function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Load/>} />
        <Route path="view" element={<View/>}/> 
     
     
      
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
