import { SET_NASA_IMAGE, 
    SET_ALL_QUIZES, 
    TOGGLE_PICTURE, 
    TOGGLE_PICTURE_INFO } from '../actions/actions'; 

export interface AppState {
    nasaImageUrl: String, 
    counter: number, 
    quizes: any[], 
    photoDisplayed: boolean, 
    infoOn: boolean, 
    nasaImageExplanation: String, 
    nasaImageTitle: String
}

export const initialState = {
    nasaImageUrl: null,
    counter: 1, 
    quizes: [], 
    photoDisplayed: false, 
    infoOn: false, 
    nasaImageExplanation: null, 
    nasaImageTitle: null
}

export function mainReducer(state:AppState, action): AppState {
    if (action.type === SET_NASA_IMAGE) {
        console.log("HERE IT IS:", action.imageData.explanation)
        return Object.assign({}, state, {
            nasaImageUrl: action.imageData.url, 
            nasaImageExplanation: action.imageData.explanation, 
            nasaImageTitle: action.imageData.title
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
    else if (action.type === SET_ALL_QUIZES) {
        return Object.assign({}, state, {
            quizes: action.quizes
        });
    }
    return state; 
}
 