import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value} {text==='positive' && <span>%</span>}</p>

const Statistics = ({good, neutral, bad, total}) => {
  return (<>
    {total === 0 
    ? <p>No feeback given</p> 
    :
      <>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={total / 3}/>
        <StatisticLine text="positive" value={good/total * 100}/>
      </>
    } 
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