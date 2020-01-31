import userAnswers from './userAnswers.js';
import { showNextQuestion } from './showNextQuestion.js';

export const addOptionsClickHandler = () => {
    document.querySelectorAll('.questionOptions').forEach((el) => {
        el.addEventListener('click', handleClick)
    })
}

const handleClick = (event) => {
    if (event.target.tagName !== 'DIV') {
        let userAnswer;
        if(event.target.tagName === 'INPUT') {
            userAnswer = {
                questionIndex: event.target.closest('.questionContainer').dataset.questionName,
                answer: event.target.value
            };
        }
        document.querySelectorAll('.nextQuestionBtn').forEach(button => {
            if (button.closest('.questionContainer').style.display === 'block') {
                button.removeAttribute('disabled');
                button.onclick = (event) => handleNextQuestion(event, userAnswer);
            }
        })
    }
}

const handleNextQuestion = (event, userAnswer) => {
    userAnswers.addAnswer(userAnswer);
    showNextQuestion(userAnswer.questionIndex);
}