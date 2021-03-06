export const SET_NASA_IMAGE = 'SET_NASA_IMAGE'; 
export const setNasaImage = imageData => ({
    type: SET_NASA_IMAGE, 
    imageData
}); 

export const SET_ALL_QUIZES = 'SET_ALL_QUIZES'; 
export const setAllQuizes = quizes => ({
    type: SET_ALL_QUIZES, 
    quizes
});

export const TOGGLE_PICTURE = 'TOGGLE_PICTURE'; 
export const togglePicture = () => ({
    type: TOGGLE_PICTURE
});

export const TOGGLE_PICTURE_INFO = 'TOGGLE_PICTURE_INFO'; 
export const togglePictureInfo = () => ({
    type: TOGGLE_PICTURE_INFO
});

export const SET_CURRENT_QUIZ_STATUS = 'SET_CURRENT_QUIZ_STATUS'; 
export const setCurrentQuizStatus = quiz => ({
    type: SET_CURRENT_QUIZ_STATUS, 
    quiz
});

export const CLEAR_QUIZ = 'CLEAR_QUIZ'; 
export const clearQuiz = () => ({
    type: CLEAR_QUIZ, 
}); 
