import { combineReducers } from 'redux';

import oldmaidReducer from './oldmaidReducer';

export const rootReducer = combineReducers({
    oldmaid: oldmaidReducer,
});