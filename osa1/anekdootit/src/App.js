import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const VoteDisplay = ({voteCount}) => {
  if (voteCount === 1) {
    return (
      <>
      has {voteCount} vote<br></br>
      </>
    )
  }
  else {
    return (
      <>
      has {voteCount} votes<br></br>
      </>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const addVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  const indexOfMaxVoteCount = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      <VoteDisplay voteCount={votes[selected]}></VoteDisplay>
      <Button handleClick={addVote} text="vote"></Button>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote"></Button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[indexOfMaxVoteCount]}<br></br>
      <VoteDisplay voteCount={votes[indexOfMaxVoteCount]}></VoteDisplay>
    </div>
  )
}

export default App