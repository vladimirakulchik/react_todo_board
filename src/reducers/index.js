import { combineReducers } from 'redux';
import background from './background';
import columnsData from './columnsData';
import selectedCardId from './selectedCardId';
import cardEditing from './cardEditing';

const rootReducer = combineReducers({
    background,
    columnsData,
    selectedCardId,
    cardEditing
});

export default rootReducer;
