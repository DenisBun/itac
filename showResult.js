import userAnswers from './userAnswers.js';
import { QUIZ_QUESTIONS } from './quizQuestions.js';

export const showResult = () => {
    const result = document.createElement('div');
    result.className = 'testResult';
    result.innerHTML = `
        TEST FINISHED!
        You result is ${calculatePoints().reduce((acc, value) => acc + value.points, 0)}
        Maximun available poinst: ${QUIZ_QUESTIONS.reduce((acc, value) => acc + value.points, 0)}
    `;
    document.getElementById('root').appendChild(result);
    calculatePoints();
}

const calculatePoints = () => {
    console.log(userAnswers.getAnswers());
    const correctlyAnsweredQuestions = QUIZ_QUESTIONS.filter((question, index) => {
        return question.options.find(option => {
            return (option.value === userAnswers.getAnswers()[index].answer) && option.isCorrectOption
        })
    })
    return correctlyAnsweredQuestions;
}