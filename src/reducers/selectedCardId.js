import { CARD_SELECT, CARD_DESELECT } from "../constants/ActionTypes";

function selectedCardId(state = null, action) {
    switch (action.type) {
    case CARD_SELECT:
        return action.id;

    case CARD_DESELECT:
        return null;

    default:
        return state;
    }
}

export default selectedCardId;
