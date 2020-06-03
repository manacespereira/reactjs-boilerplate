import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  createUser: ["username", "password"],
});

const initialState = {
  loading: false,
  user: {},
};

const create = (state = initialState, action) => {
  console.dir(action);
  return {
    loading: true,
    user: action.user,
  };
};

export default createReducer(initialState, {
  [Types.CREATE_USER]: create,
});
