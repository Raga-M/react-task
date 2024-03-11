import React from 'react'

const Question = ({question,questionNo,handleAnswer}) => {
  return (
    <div>
        <h2 className='text-xl font-medium p-3'>{questionNo +1}) {question.question}</h2>
        <ul className='grid md:grid-cols-4 grid-col-2 '>
            {
            question.answerOptions.map((option)=>(
                <li key={option.text} onClick={()=>handleAnswer(option.isCorrect)} className='p-3 bg-gray-300 m-3  cursor-pointer'> {option.text}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Question