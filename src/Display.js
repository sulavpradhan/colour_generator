import React from 'react';
import './index.css';

const Display = ({Colour}) => {
  return <div className='displaydiv'
        style={{backgroundColor: Colour,
            width: '250px',
            height: '250px',
            border: '2px solid'
            }}>
        
    </div>;
};

Display.defaultProps ={
    Colour: "Empty colour value"
}

export default Display;
