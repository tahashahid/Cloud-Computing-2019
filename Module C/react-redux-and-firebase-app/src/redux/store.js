import { createStore } from 'redux';
import { ADD_TODO, REMOVE_TODO } from './actionTypes'

function cart(state = { todos: [] }, action) {
    state = { ...state }
    switch (action.type) {
        case ADD_TODO:
            state.todos.push(action.payload);
            break;
        case REMOVE_TODO:
            break;
        default:
            break;
    }
    // console.log(state);
    return state;
}

export default createStore(cart);