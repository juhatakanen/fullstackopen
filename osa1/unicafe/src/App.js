import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
          <button onClick={handleClick}>
            {text}
          </button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  let all = good + neutral + bad
  let average = (good-bad) / (all) || 0
  let positive = ((good / all) * 100) || 0
  if (all > 0) {
  return (
    <table>
      <tbody>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="all" value={all}/>
      <StatisticsLine text="average" value={average}/>
      <StatisticsLine text="positive" value={positive} percent="%"/>
      </tbody>
    </table>
  )
  }
  else {
    return (<>
      No feedback given
      </>
    )
    }
}

const StatisticsLine = ({text, value, percent}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}{percent}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral+1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad+1)} text={"bad"} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App