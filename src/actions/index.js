import * as types from '../constants/ActionTypes';

export const changeBackground = (background) => ({
    type: types.BACKGROUND_CHANGE,
    background
});

export const openEditPopup = () => ({
    type: types.OPEN_EDIT_POPUP
});

export const closeEditPopup = () => ({
    type: types.CLOSE_EDIT_POPUP
});

export const columnAdd = (title) => ({
    type: types.COLUMN_ADD,
    title
});

export const cardAdd = (card) => ({
    type: types.CARD_ADD,
    card
});

export const cardUpdate = (card) => ({
    type: types.CARD_UPDATE,
    card
});

export const cardDelete = (card) => ({
    type: types.CARD_DELETE,
    card
});

export const cardSelect = (id) => ({
    type: types.CARD_SELECT,
    id: id
});

export const cardDeselect = () => ({
    type: types.CARD_DESELECT
});

export const moveCardUp = (id) => ({
    type: types.MOVE_CARD_UP,
    id
});

export const moveCardDown = (id) => ({
    type: types.MOVE_CARD_DOWN,
    id
});

export const moveCardLeft = (id) => ({
    type: types.MOVE_CARD_LEFT,
    id
});

export const moveCardRight = (id) => ({
    type: types.MOVE_CARD_RIGHT,
    id
});

export const dragCard = (id, hoverId) => ({
    type: types.DRAG_CARD,
    id,
    hoverId
});
