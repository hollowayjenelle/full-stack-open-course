import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, neutral, bad, total}) => {
  return (<>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {total / 3}</p>
      {good > 0 ? <p>positive {good/total * 100}%</p> : <p>positive 0%</p>}
  </>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad 

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
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App