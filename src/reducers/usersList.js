const SET_SELECTED_INDEX = 'SET_SELECTED_INDEX';

export function setSelectedIndex(value) {
  return { type: SET_SELECTED_INDEX, index: value };
}

const initialState = NaN;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_INDEX:
      return action.index;

    default:
      return state;
  }
}
