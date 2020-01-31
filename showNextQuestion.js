import { showResult } from './showResult.js';

export const showNextQuestion = (previousQuestionIndex) => {
    document.querySelector(`.questionContainer[data-question-name='${previousQuestionIndex}']`).style.display = 'none';
    if (document.querySelector(`.questionContainer[data-question-name='${+previousQuestionIndex + 1}']`)) {
        document.querySelector(`.questionContainer[data-question-name='${+previousQuestionIndex + 1}']`).style.display = 'block';
    } else {
        showResult();
    }
    
}