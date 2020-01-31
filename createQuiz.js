import { QUIZ_QUESTIONS } from './quizQuestions.js';


export const createQuiz = () => {
    QUIZ_QUESTIONS.map(createQuestion)
}

const createQuestion = ({ question, options }, index) => {

    const questionContainer = document.createElement('div');
    questionContainer.className = 'questionContainer';
    questionContainer.dataset.questionName = index + 1;
    questionContainer.innerHTML = `
        <div class="questionTitle">${question}</div>
            <div class="questionOptions">
                ${options.map(createQuestionOption)}
            </div>
        <button class="nextQuestionBtn" disabled>Next</button>
    `
    document.getElementById('root').appendChild(questionContainer);
}

const createQuestionOption = (option, optionIndex) => {
    return `
        <div class="questionOption">
            <input
                data-is-correct-option=${option.isCorrectOption}
                type="radio"
                id="option${optionIndex + 1}"
                name="contact"
                value="${option.value}"
            />
            <label for="option${optionIndex + 1}">${option.value}</label>
        </div>
    `
};
