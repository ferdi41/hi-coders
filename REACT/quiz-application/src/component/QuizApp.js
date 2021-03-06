import React, { useState } from 'react';
import QUIZ_DATA from '../data/quiz-data'
import Quiz from './Quiz'
import Result from './Result'
import shuffleQuestions from '../utility/shuffleQuestions'

/**
 * QuizApp componenti <Quiz/> ve <Result> componentlerinin atasidir.
 * @returns 
 */
export default function QuizApp({questionNumber}) {
  // baslangic state
  const initialState={
    quizData: shuffleQuestions(QUIZ_DATA),
    step: 1,
    score: 0,
  }

   const [data, setData] = useState(initialState);

/**
 * Tiklanan sikkin dogru ve yanlis olmasi durumunu kontrol eder.
 * Herhangi bir sikkin tiklanmasi durumunda next() fonksiyonunu cagirarak diger soruya gecer.
 * @param {*} index 
 * @returns 
 */
   const handleAnswerClick = (index) => (e) => {
        const { quizData} = data;
        const isCorrect = quizData[0].correct === index; // sorunun dogru olup olmadigini kontrol eder.

        if (isCorrect && e.target.nodeName === 'LI') {
          e.target.classList.add('right');
          setTimeout(function(){nextStep(10)},750);   // dogru soru icin +10 puan   
        }

        else if (e.target.nodeName === 'LI') {
          e.target.classList.add('wrong');
          setTimeout(function(){nextStep(-5)},750);// yanlis soru icin -5 puan
        }
      };
/**
 * Bir sonraki soruyu getiren fonksiyon
 * @param {*} pScore 
 */
     const nextStep = (pScore) => {
        const {quizData, step, score} = data;
        const restOfQuestions = quizData.slice(1);// cevaplanan soru quizDatadan cikarilir.
        setData({
            step: step + 1,
            quizData: restOfQuestions,
            score: score+pScore
          });
      };

      /**
       * Quizi tekrardan baslatir.
       */
      const restartQuiz = () => {
        setData(initialState);
      };

       if (data.step > questionNumber) {
        return (
          <Result //quiz bitiminde ekrana gelen component
          score={data.score}
          restartQuiz={restartQuiz}
        />
        );
       }
        else {
          return(  
          <div>
           <Quiz quizData={data.quizData} // karistirilan butun sorular quiz komponentine gonderilir.
                 step={data.step}
                 totalQuestions={questionNumber}
                 score={data.score}
                 handleAnswerClick={handleAnswerClick}
            />
        </div>
          )
        }
      }
    