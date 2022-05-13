import { createSelector} from 'reselect';
const searchInState= (state) => state.Git_search;

export const makeSelectUsers = createSelector(searchInState,(Git_search)  => Git_search.users);