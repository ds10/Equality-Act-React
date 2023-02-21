import { Wheel } from 'react-custom-roulette'
import React, { useState } from 'react'
// https://www.npmjs.com/package/react-custom-roulette

const Winwheel = () => { 
  const data = [
    { option: '0' },
    { option: '1' },
    { option: '2' },
  ]

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default Winwheel;