
import { INCREMENT, DECREMENT } from '../Actions/ActionsType'

const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: return { ...state, counter: state.counter + action.payload };
        case DECREMENT: return { ...state, counter: state.counter > 0 ? state.counter - action.payload : state.counter };
        default: return state
    }
}

export default CounterReducer