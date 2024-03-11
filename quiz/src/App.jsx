import React, { useState } from 'react'
import questionData from "./data/question.json"
import Question from './components/Question';
import Result from './components/Result';

const App = () => {
  const [question,setQuestion]=useState(0);
  const [answer,setAnswer]=useState([])
 const handleAnswer =(isCorrect)=>{
setQuestion(question+1)
setAnswer([...answer,isCorrect])



}
const reset=()=>{
  setQuestion(0)
  setAnswer([])
}

  return (
    <div >
      <h1 className='p-2 text-3xl font-bold'>Quiz Questions</h1>
      {question < questionData.length &&

    <Question question={questionData[question]} questionNo={question} handleAnswer={handleAnswer}/>
      }
      {
      question == questionData.length  &&
     <Result answer={answer} questionData={questionData} reset={reset} />

      }
    </div>
  )
}

export default App