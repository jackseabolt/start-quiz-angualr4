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