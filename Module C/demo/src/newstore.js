import { createStore } from 'redux';

function cart(state =[], action){
    // let newState;
    // state = { ...state }
    switch (action.type){
        case 'ADD':
            state.push(action.select);
            // state = { ...state };
            // newState = {
            //     counter: state.counter++
            // }
            break
        case 'DEL':
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