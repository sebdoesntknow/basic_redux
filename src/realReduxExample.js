const initialState = {
    counter: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            };

        default:
            return state;
    }
}

const store = Redux.createStore(reducer, initialState);

function updateView() {
    document.querySelector('#counter').innerText = store.getState().counter;
}

store.subscribe(updateView);
updateView();

document.getElementById('inc').onclick = () => store.dispatch({ type: 'INC' });
document.getElementById('dec').onclick = () => store.dispatch({ type: 'DEC' });
