import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import background from './background';
import columnsData from './columnsData';
import selectedCardId from './selectedCardId';
import cardEditing from './cardEditing';
import { BACKGROUND_CHANGE, COLUMN_ADD, CARD_ADD, CARD_UPDATE, CARD_DELETE,
    MOVE_CARD_UP, MOVE_CARD_DOWN, MOVE_CARD_LEFT, MOVE_CARD_RIGHT } from '../constants/ActionTypes';

const rootReducer = combineReducers({
    background,
    columnsData,
    selectedCardId,
    cardEditing
});

const actions = [
    BACKGROUND_CHANGE,
    COLUMN_ADD,
    CARD_ADD,
    CARD_UPDATE,
    CARD_DELETE,
    MOVE_CARD_UP,
    MOVE_CARD_DOWN,
    MOVE_CARD_LEFT,
    MOVE_CARD_RIGHT
];

const undoableRootReducer = undoable(
    rootReducer,
    {
        filter: function (action, currentState, previousState) {

            if (actions.indexOf(action.type) >= 0) {
                return currentState !== previousState;
            } else {
                return false;
            }
        }
    }
);

export default undoableRootReducer;
