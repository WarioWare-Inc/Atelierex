import { React, useEffect, useState, useRef } from 'react';
import QEntry from './QEntry';
import QASearch from './QASearch';
import axios from 'axios';
import AddQuestion from './AddQuestion';

const QAListView = ( {productId} ) => {
  const [ questions, setQuestions ] = useState([]);
  const [ qSlice, setQSlice ] = useState(2);
  const [ showAddQuestion, setAddQuestion] = useState(false)
  const [ questionsRaw, setQuestionsRaw ] = useState([])

  const getAllQuestions = () => {
    const params = {
      product_id: productId,
      count: 200
    };
    axios.get('/qa/questions', { params })
    .then((result) => {setQuestions(result.data.results); setQuestionsRaw(result.data.results)});
  }

  useEffect(() => {
    getAllQuestions()
  }, [])

return (
<div>
<div> <QASearch setQuestions={setQuestions} questions={questionsRaw} reset={getAllQuestions}/></div>
<div className="qListView"> {questions.slice(0,qSlice).map((q, i) => {return <QEntry key={i} question={q}/>})}
{qSlice < questions.length ? <button className="qaMoreQ" onClick={() => {setQSlice(qSlice+2)}}>MORE ANSWERED QUESTIONS</button> : null}
<button className="qaMoreQ" onClick={()=>{setAddQuestion(true)}}>ADD A QUESTION</button>
<div>{showAddQuestion ? <AddQuestion show={setAddQuestion} productId={40364}/> : null}</div>
</div>
</div>

)

};

export default QAListView