import { BUY_ICECREAM } from "./icecreamTypes"

const initialState = {
    numberOfICeCreams : 40
}

const iceCreamReducer = (state = initialState,action) =>{
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state , numberOfICeCreams : state.numberOfICeCreams-1
        }
        default : return state
    }
}

export default iceCreamReducer