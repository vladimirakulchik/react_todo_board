import * as types from '../constants/ActionTypes';

export const changeBackground = (background) => {
    return {
        type: types.BACKGROUND_CHANGE,
        background
    };
};
