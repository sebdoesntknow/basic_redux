'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var state = {
  counter: 0
};

function counterComponent() {
  document.querySelector('#counter').innerText = state.counter;
}

document.querySelector('#inc').onclick = function () {
  return dispatch('INC');
};

document.querySelector('#dec').onclick = function () {
  return dispatch('DEC');
};

var listeners = [];

function subscribe(callback) {
  listeners.push(callback);
}

function dispatch(action) {
  var newState = reducer(state, action);

  if (state !== newState) {
    state = newState;
  }

  listeners.forEach(function (listener) {
    return listener();
  });
}

function reducer(state, action) {
  switch (action) {
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

subscribe(counterComponent);