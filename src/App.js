import React,{useState,useEffect} from 'react';

import './App.css';
import { getRandom } from './unsplash/api';
import Home from './container/home';
import Footer from './components/Footer';


function App() {
  const [random, setRandom] = useState("");

  useEffect(() => {
    getRandom().then(res=>{
      setRandom(res);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header " >
         <div className="homeContainer clip-path" style={{backgroundImage:`url("${random}")`}}>
           
         </div>
         <Home/>
         
      </header>
      <Footer/>
    </div>
  );
}

export default App;
