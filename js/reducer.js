import { combineReducers } from 'redux';
import { SELECT_CATEGORY, SELECT_QUESTION, SUBMIT_QUERY, Categories } from './actions';
const { INIT } = Categories;

function categoryReducer(state = INIT, action) {
  switch(action.type) {
    case SELECT_CATEGORY:
      return action.category;
    default:
      return state;
  }
}

function questionReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_QUESTION:
      return action.question;
    default:
      return state;
  }
}

function queryReducer(state = "", action) {
  switch (action.type) {
    case SUBMIT_QUERY:
      return action.query;
    default:
      return state;
  }
}

const reducer = combineReducers({
  categoryReducer,
  questionReducer,
  queryReducer
});

export default reducer;
