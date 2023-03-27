import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (<button onClick={handleClick}>
    {text}
  </button>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
    setGood(prevGood => prevGood + 1)
  }

  const handleNeutral = () =>{
    setNeutral(prevNeutral => prevNeutral + 1)
  }

  const handleBad = () =>{
    setBad(prevBad => prevBad + 1)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <h3>statistics</h3>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App