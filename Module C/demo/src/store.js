import { createStore } from 'redux';


function cart(state = { counter: 0}, action){
    // let newState;
    state = { ...state }
    switch (action.type){
        case 'INCREMENT':
            state.counter += action.by;
            // state = { ...state };
            // newState = {
            //     counter: state.counter++
            // }
            break
        case 'DECREMENT':
            state.counter -= 1;
            // newState = {
            //     counter: state.counter--
            // }
            break;
        default:
            break;
    }
    console.log(state);
    return state;
}

export default createStore(cart);