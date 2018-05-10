import { OPEN_MENU, CLOSE_MENU } from "../constants/ActionTypes";

function menuOpen(state = false, action) {
    switch (action.type) {
    case OPEN_MENU:
        return true;

    case CLOSE_MENU:
        return false;

    default:
        return state;
    }
}

export default menuOpen;