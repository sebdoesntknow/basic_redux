/**
 * Let's define a 'state' object where we will keep
 * our application state. It will have a 'counter' key
 * with an initial value of 0 which we can later modify
 * by using our reducers.
 */
let state = {
  counter: 0
};

/**
 * We create a function that will update our counter if
 * the state changes.
 */
function counterComponent() {
  document.querySelector('#counter').innerText = state.counter;
}

/**
 * Select the increment button from the index.html
 * so we can bind an action to it when it's clicked.
 */
document.querySelector('#inc').onclick = () => dispatch('INC');


/**
 * Same thing here but for the decrement button in the html.
 */
document.querySelector('#dec').onclick = () => dispatch('DEC');

/**
 * The parts of our application that are subscribed and will be
 * listening for changes in our application state.
 */
const listeners = [];

function subscribe(callback) {
  listeners.push(callback);
}

/**
 * Our action dispatcher. The dispatcher will be the one
 * sending the actions to our reducer. If the state changed,
 * it will be in charge of notifying and updating all subscribed
 * components/parts of our application.
 */
function dispatch(action) {
  const newState = reducer(state, action);

  if (state !== newState) {
    state = newState;
  }

  listeners.forEach((listener) => listener());
}

/**
 * The reducer function is the core of our state manipulation process.
 * The reducer will receive the current state and the requested action,
 * it will have the logic to know what to do with the state and it will
 * always (I repeate, ALWAYS) return a brand new copy of the state with
 * modifications (or not).
 */
function reducer(state, action) {
  switch (action) {
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

/**
 * Subscribe our counter component to be notified in case
 * the state updates
 */
subscribe(counterComponent);
