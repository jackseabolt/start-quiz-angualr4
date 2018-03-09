import { SET_NASA_IMAGE, 
    SET_ALL_QUIZES, 
    TOGGLE_PICTURE, 
    TOGGLE_PICTURE_INFO, 
    SET_CURRENT_QUIZ_STATUS, 
    CLEAR_QUIZ } from '../actions/actions'; 

export interface AppState {
    nasaImageUrl: String, 
    counter: number, 
    quizes: any[], 
    photoDisplayed: boolean, 
    infoOn: boolean, 
    nasaImageExplanation: String, 
    nasaImageTitle: String,

    answers: any[], 
    currentQuestion: String, 
    currentQuiz: number, 
    sessionId: number, 
    correctAnswer: String,
    response: String,  
    continue: Boolean,
    score: any, 
    quizLength: any, 
    currentIndex: number,
    usingQuiz: boolean
}

export const initialState = {
    nasaImageUrl: null,
    counter: 1, 
    quizes: [], 
    photoDisplayed: false, 
    infoOn: false, 
    nasaImageExplanation: null, 
    nasaImageTitle: null,

    answers: [], 
    currentQuestion: null, 
    currentQuiz: null, 
    sessionId: null, 
    correctAnswer: null,
    response: null,  
    continue: true,
    score: null, 
    quizLength: null, 
    currentIndex: null,
    usingQuiz: false
}

export function mainReducer(state:AppState, action): AppState {
    if (action.type === SET_NASA_IMAGE) {
        return Object.assign({}, state, {
            nasaImageUrl: action.imageData.url, 
            nasaImageExplanation: action.imageData.explanation, 
            nasaImageTitle: action.imageData.title
        })
    }
    else if (action.type === SET_CURRENT_QUIZ_STATUS) {
        return Object.assign({}, state, {
            question: action.quiz.question, 
            answers: action.quiz.answers,
            currentQuestion: action.quiz.question, 
            sessionId: action.quiz.sessionId, 
            currentQuiz: action.quiz.title, 
            correctAnswer: action.quiz.correct_answer,
            response: action.quiz.response, 
            continue: action.quiz.continue,
            quizLength: action.quiz.quizLength, 
            score: action.quiz.score, 
            currentIndex: action.quiz.current, 
            usingQuiz: true
        })
    }
    else if (action.type === TOGGLE_PICTURE) {
        return Object.assign({}, state, {
            photoDisplayed: !state.photoDisplayed
        })
    }
    else if (action.type === TOGGLE_PICTURE_INFO) {
        return Object.assign({}, state, {
            infoOn: !state.infoOn
        })
    }
    else if (action.type === CLEAR_QUIZ) {
        return Object.assign({}, state, {
            question: null, 
            answers: [],
            currentQuestion: null, 
            sessionId: null, 
            currentQuiz: null,
            correctAnswer: null,
            response: null, 
            continue: true, 
            quizLength: null, 
            score: null, 
            currentIndex: null, 
            infoOn: false, 
            usingQuiz: false 
        })
    }
    else if (action.type === SET_ALL_QUIZES) {
        return Object.assign({}, state, {
            quizes: action.quizes
        });
    }
    return state; 
}
 