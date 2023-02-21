

import Spinner from './Spinner';
import Winwheel from './Winwheel';
import {useState} from 'react'

function App() {
  const title = "The Equality Act Game";
  const [slide, setSlide] = useState("0");


  return (
    
    <div className="App">

      <div align="center" class="heading" id ="spinner">
      <div className="nine heading">
      <h1>{title} {slide}</h1>
      <span> Spin the wheel</span>
    
      <div><Spinner /></div>
      <div><Winwheel /></div>
      </div>    </div>
    </div>
  );
}

export default App;
