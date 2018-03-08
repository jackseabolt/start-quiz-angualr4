import { SET_NASA_IMAGE, SET_ALL_QUIZES } from '../actions/actions'; 

export interface AppState {
    nasaImageUrl: String, 
    counter: number, 
    quizes: any[]
}

export const initialState = {
    nasaImageUrl: null,
    counter: 1, 
    quizes: [] 
    // nasaImageExplanation: null, 
    // nasaImageTitle: null
}

export function mainReducer(state:AppState, action): AppState {
    if (action.type === SET_NASA_IMAGE) {
        return Object.assign({}, state, {
            nasaImageUrl: action.imageData, 
            // nasaImageExplanation: action.imageData.explanation, 
            // nasaImageTitle: action.imageData.title
        })
    }
    else if (action.type === SET_ALL_QUIZES) {
        console.log("HERE THEY ARE" , action.quizes)
        return Object.assign({}, state, {
            quizes: action.quizes
        });
    }
    return state; 
}
 