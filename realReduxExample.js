'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
    counter: 0
};

function reducer(state, action) {
    console.log('On Reducer:', { action: action, state: state });
    switch (action.type) {
        case 'INC':
            return _extends({}, state, {
                counter: state.counter + 1
            });

        case 'DEC':
            return _extends({}, state, {
                counter: state.counter - 1
            });

        default:
            return state;
    }
}

var store = Redux.createStore(reducer, initialState);
console.log(store);

function updateView() {
    document.querySelector('#counter').innerText = store.getState().counter;
}

store.subscribe(updateView);
updateView();

document.getElementById('inc').onclick = function () {
    return store.dispatch({ type: 'INC' });
};
document.getElementById('dec').onclick = function () {
    return store.dispatch({ type: 'DEC' });
};