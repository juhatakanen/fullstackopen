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
    <>
      good {good}<br></br>
      neutral {neutral}<br></br>
      bad {bad}<br></br>
      all {all}<br></br>
      average {average}<br></br>
      positive {positive} %<br></br>
    </>
  )
  }
  else {
    return (<>
      No feedback given
      </>
    )
    }
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