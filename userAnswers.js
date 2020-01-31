class UserAnswers {
    constructor() {
        this.answers = []
    }

    addAnswer(answer) {
        this.answers = [
            ...this.answers,
            answer
        ]
    }

    getAnswers() {
        return this.answers;
    }
}

export default new UserAnswers();
