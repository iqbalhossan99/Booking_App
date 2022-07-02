import * as actionTypes from './actionTypes'


const initState = {
    isAuth: false,
}

export const rootReducer = (state = initState, action:any) =>{
    switch(action.type){
        case actionTypes.AUTHENTICATE_USER:
        return{
            ...state,
            isAuth: true
        }
        default:
            return state;
    }
}