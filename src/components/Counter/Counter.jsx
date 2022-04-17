import React, { useState } from 'react'

export const Counter = () => {

    const [counter , setCounter] =useState(0);

    const handleIncrement = () => {

        setCounter(s => s + 1);
    }
    const handleDecrement = () => {

        counter > 0 && setCounter(s => s - 1);
    }
  return (
    <div className='Counter'>
        <h1 style={{textAlign : "center"}}>Counter Using Reactjs</h1>
        <div className="counter-section">
            <div className="increase-btn">
                <button className='btn' onClick={handleIncrement}>+</button>
            </div>
            <h1 className='counter-text'>{counter}</h1>
            <div className="decrease-btn">
                <button className='btn' onClick={handleDecrement}>-</button>
            </div>
        </div>
        <button className="reset-btn" onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}
