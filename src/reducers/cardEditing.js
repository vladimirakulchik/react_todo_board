import { OPEN_EDIT_POPUP, CLOSE_EDIT_POPUP } from "../constants/ActionTypes";

function cardEditing(state = false, action) {
    switch (action.type) {
    case OPEN_EDIT_POPUP:
        return true;

    case CLOSE_EDIT_POPUP:
        return false;

    default:
        return state;
    }
}

export default cardEditing;
