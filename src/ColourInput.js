import React from 'react';

const ColourInput = ({Colour, setColour, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addColour'></label>
      <input 
        autoFocus
        id='addColour'
        placeholder='input colour'
        type='text'
        value={Colour}
        onChange={(event)=>setColour(event.target.value)}
        />
      
    </form>
  )
};

export default ColourInput;
