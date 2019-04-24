const ADD_USER = 'ADD_USER';
const UPDATE_USER = 'UPDATE_USER';

export function addUser(value) {
  return { type: ADD_USER, user: value };
}

export function updateUser(user) {
  return { type: UPDATE_USER, user };
}

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];

    case UPDATE_USER: {
      const modifiedArray = state.slice();
      modifiedArray[action.user.index] = action.user.data;
      return modifiedArray;
    }
    default:
      return state;
  }
}
