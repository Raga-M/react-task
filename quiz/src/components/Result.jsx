import React from 'react'

const Result = ({answer,questionData,reset=()=>{}}) => {
    const ans=answer.filter((ans)=>ans).length
  const curAns=questionData.flatMap(ans=> ans.answerOptions).filter(opt=>opt.isCorrect)
 
  return (
    <div>
       <h2 className='text-2xl font-semibold p-2'> Correct answer {ans}</h2>
       {
       questionData.map((opt,i)=>
       <div  key={i}>
       <p className={`${answer[i]? "text-green-500":"text-red-600"} m-5 text-md` }>{i+1}. {opt.question}
      {
      !answer[i]&& <span className='font-medium ps-2 text-green-400'>{curAns[i].text}</span>
      }
       </p>

     </div>
       )
       }
       <button onClick={reset} className='m-3 bg-sky-400 px-3 py-2 rounded-md'>Reset</button>
    </div>
  )
}

export default Result