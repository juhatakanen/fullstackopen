import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
          <button onClick={handleClick}>
            {text}
          </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral+1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad+1)} text={"bad"} />
      <h1>statistics</h1>
      good {good} <br></br>
      neutral {neutral} <br></br>
      bad {bad} <br></br>
      all {all} <br></br>
      average {(good-bad) / (all)} <br></br>
      positive {(good / (all)) * 100 } %
    </div>
  )
}

export default App