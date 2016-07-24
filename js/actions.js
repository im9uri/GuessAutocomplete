/*
 * action types
 */

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_QUESTION = 'SELECT_QUESTION';
export const SUBMIT_QUERY = 'SUBMIT_QUERY';

/*
 * other constants
 */

 export const Categories = {
   INIT: 'INIT',
   CULTURE: '문화',
   PERSON: '인물',
   NAME: '이름',
   QUESTION: '질문'
 }

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function selectCategory(category) {
  return { type: SELECT_CATEGORY, category }
}

export function selectQuestion(question) {
  return { type: SELECT_QUESTION, question }
}

export function submitQuery(query) {
  return { type: SUBMIT_QUERY, query }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
