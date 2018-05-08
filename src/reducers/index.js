import { combineReducers } from "redux";
import undoable from "redux-undo";
import background from "./background";
import columnsData from "./columnsData";
import selectedCardId from "./selectedCardId";
import cardEditing from "./cardEditing";
import * as types from "../constants/ActionTypes";

const rootReducer = combineReducers({
    background,
    columnsData,
    selectedCardId,
    cardEditing
});

const actions = [
    types.BACKGROUND_CHANGE,
    types.COLUMN_ADD,
    types.CARD_ADD,
    types.CARD_UPDATE,
    types.CARD_DELETE,
    types.MOVE_CARD_UP,
    types.MOVE_CARD_DOWN,
    types.MOVE_CARD_LEFT,
    types.MOVE_CARD_RIGHT,
    types.DRAG_CARD,
    types.DRAG_CARD_TO_COLUMN
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
