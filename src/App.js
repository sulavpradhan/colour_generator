
import Header from './Header';
import ColourInput from './ColourInput';
import Display from './Display';
import './index.css';
import { useState } from 'react';



function App() {
  const [Colour,setColour] = useState('')
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    
  }
  return (
    <div className="App">
      <Header />
      <Display 
        Colour={Colour}
      />
      <ColourInput
        Colour={Colour}
        setColour={setColour}
        handleSubmit={handleSubmit}
      />
    </div>

  );
}

export default App;
