import { useState } from 'react';
import './App.css'
import CheckBox from './Components/CheckBox/CheckBox';
import Departure from './Components/Departure/Departure';
import From from './Components/From/From';
import To from './Components/To/To';
function App() {
  const[formclass, setFormClass] =useState()
  return (
    <div className="container  p-5 shadow whole-box bg-light">
      <h1>Flight deals with Virgin Atlantic</h1>
      <CheckBox></CheckBox>
      <div className="row">
      <div className="col-md-3">
      <From></From>
      </div>
      <div className="col-md-3">
      <To></To>
      </div>
      <div className="col-md-3">
      <Departure></Departure>
      </div>
      </div>
      
      
      </div>
    
  );
}

export default App;
