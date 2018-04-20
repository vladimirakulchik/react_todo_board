import { combineReducers } from 'redux';
import background from './background';
import columnsData from './columnsData';

const rootReducer = combineReducers({
    background,
    columnsData
});

export default rootReducer;
