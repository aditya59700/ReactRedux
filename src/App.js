import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';
import Counter1 from './hooks/Counter1';
import Counter2 from './hooks/Counter2';
import Counter3 from './hooks/Counter3';
import Counter4 from './hooks/Counter4';
import { createContext, useReducer } from 'react';
import CompA from './globalStateForReducer/CompA';
import CompB from './globalStateForReducer/CompB';
import CompC from './globalStateForReducer/CompC';

export const CountContext = createContext()

const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment' : return state +1
        case 'decrement' : return state -1
        case 'reset' : return initialState
        default : return state
    }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <>
    <Provider store={store}>
    <div className="App">
      Welcome to React + Redux
      <CakeContainer />
      <IceCreamContainer />

    </div>
    </Provider>
    {/* <Counter1 />
    <Counter2 />
    <Counter3 />
    <Counter4 /> */}
    <Counter3 />
    <CountContext.Provider value={{countState : count, countDispatch : dispatch}}>
    <h1>Count : {count}</h1>
    <CompA />
    <CompB />
    <CompC />
    </CountContext.Provider>
    </>
  );
}

export default App;
