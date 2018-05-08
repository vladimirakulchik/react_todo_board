import { BACKGROUND_CHANGE } from "../constants/ActionTypes";

const initialState = {
    bgColor: "#43A047",
    bgImage: "none"
};

function background(state = initialState, action) {
    switch (action.type) {
    case BACKGROUND_CHANGE:
        return Object.assign(
            {},
            state,
            {
                bgColor: action.background.color,
                bgImage: action.background.photo
            }
        );

    default:
        return state;
    }
}

export default background;
