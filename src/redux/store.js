import { combineReducers, createStore } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./icecreams/icecreamReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer
})
const store = createStore(rootReducer)

export default store