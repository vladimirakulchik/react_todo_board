import { COLUMN_ADD, CARD_ADD, CARD_UPDATE, CARD_DELETE,
    MOVE_CARD_UP, MOVE_CARD_DOWN, MOVE_CARD_LEFT, MOVE_CARD_RIGHT,
    DRAG_CARD, DRAG_CARD_TO_COLUMN } from "../constants/ActionTypes";

const initialState = {
    data: [
        {
            id: 0,
            title: "Default",
            cards: []
        }
    ],
    nextColumnId: 1,
    nextCardId: 0
};

export default function columnsData(state = initialState, action) {
    switch (action.type) {
        case COLUMN_ADD: {
            return Object.assign(
                {},
                state,
                {
                    data: [
                        ...state.data,
                        {
                            id: state.nextColumnId,
                            title: action.title,
                            cards: []
                        }
                    ],
                    nextColumnId: state.nextColumnId + 1
                }
            );
        }

        case CARD_ADD: {
            let newCard = action.card;
            newCard.id = state.nextCardId;

            return Object.assign(
                {},
                state,
                {
                    data: modifyData(state.data, newCard, addItem),
                    nextCardId: state.nextCardId + 1
                }
            );
        }

        case CARD_UPDATE: {
            return changeDataState(
                state,
                modifyData(state.data, action.card, updateItem)
            );
        }

        case CARD_DELETE: {
            return changeDataState(
                state,
                modifyData(state.data, action.card, deleteItem)
            );
        }

        case MOVE_CARD_UP: {
            const cardId = action.id;
            const column = findColumn(state.data, cardId);
            const from = findCardIndex(column, cardId);
            const to = from - 1;

            if (to >= 0) {
                return verticalMove(state, cardId, from, to);
            }

            return state;
        }

        case MOVE_CARD_DOWN: {
            const cardId = action.id;
            const column = findColumn(state.data, cardId);
            const from = findCardIndex(column, cardId);
            const to = from + 1;

            if (to < column.cards.length) {
                return verticalMove(state, cardId, from, to);
            }

            return state;
        }

        case MOVE_CARD_LEFT: {
            const cardId = action.id;
            const from = findColumnIndex(state.data, cardId);
            const to = from - 1;

            if (to >= 0) {
                return horizontalMove(state, cardId, from, to);
            }

            return state;
        }

        case MOVE_CARD_RIGHT: {
            const cardId = action.id;
            const from = findColumnIndex(state.data, cardId);
            const to = from + 1;

            if (to < state.data.length) {
                return horizontalMove(state, cardId, from, to);
            }

            return state;
        }

        case DRAG_CARD: {
            const cardId = action.id;
            const hoverId = action.hoverId;

            const fromColumn = findColumnIndex(state.data, cardId);
            const toColumn = findColumnIndex(state.data, hoverId);

            if (fromColumn === toColumn) {
                const column = findColumn(state.data, cardId);
                const from = findCardIndex(column, cardId);
                const to = findCardIndex(column, hoverId);

                return verticalMove(state, cardId, from, to);
            } else {
                const column = findColumn(state.data, hoverId);
                const toIndex = findCardIndex(column, hoverId);

                return horizontalMoveToIndex(state, cardId, fromColumn, toColumn, toIndex);
            }
        }

        case DRAG_CARD_TO_COLUMN: {
            const cardId = action.id;
            const hoverColumnId = action.columnId;

            const from = findColumnIndex(state.data, cardId);
            const to = findColumnIndexById(state.data, hoverColumnId);

            if (from !== to) {
                return horizontalMove(state, cardId, from, to);
            }

            return state;
        }

        default:
            return state;
    }
}

function modifyData(data, modifiedCard, modifiedAction) {
    return data.map(column => {
        if (column.id === modifiedCard.columnId) {
            return Object.assign(
                {},
                column,
                {
                    cards: modifiedAction(column.cards, modifiedCard)
                }
            );
        }

        return column;
    })
}

function addItem(collection, newItem) {
    return [...collection, newItem];
}

function updateItem(collection, updatedItem) {
    return collection.map(item => {
        if (item.id === updatedItem.id) {
            return updatedItem;
        }

        return item;
    });
}

function deleteItem(collection, deletedItem) {
    return collection.filter(item =>
        item.id !== deletedItem.id
    );
}

function findColumn(columns, cardId) {
    return columns.find(column =>
        findCardIndex(column, cardId) >= 0
    );
}

function findColumnIndex(columns, cardId) {
    return columns.findIndex(column =>
        findCardIndex(column, cardId) >= 0
    );
}

function findColumnIndexById(columns, columnId) {
    return columns.findIndex(column => column.id === columnId);
}

function findCardIndex(column, cardId) {
    return column.cards.findIndex(card => card.id === cardId);
}

function verticalMove(state, cardId, from, to) {
    let columns = [...state.data];
    let column = {...findColumn(columns, cardId)};
    let cards = [...column.cards];

    cards.splice(to, 0, cards.splice(from, 1)[0]);

    let updatedColumn = changeCardsState(column, cards);
    let updatedColumns = updateItem(columns, updatedColumn);
    return changeDataState(state, updatedColumns);
}

function horizontalMove(state, cardId, from, to) {
    let columns = [...state.data];
    let columnFrom = {...columns[from]};
    let columnTo = {...columns[to]};

    let cardsFrom = [...columnFrom.cards];
    let cardsTo = [...columnTo.cards];

    let cardIndex = findCardIndex(columnFrom, cardId);

    let movedCard = cardsFrom.splice(cardIndex, 1)[0];
    movedCard.columnId = to;
    cardsTo = addItem(cardsTo, movedCard);

    let updatedColumnFrom = changeCardsState(columnFrom, cardsFrom);
    let updatedColumnTo = changeCardsState(columnTo, cardsTo);
    let updatedColumns = updateItem(columns, updatedColumnFrom);
    updatedColumns = updateItem(updatedColumns, updatedColumnTo);
    return changeDataState(state, updatedColumns);
}

function horizontalMoveToIndex(state, cardId, fromColumn, toColumn, toIndex) {
    let columns = [...state.data];
    let columnFrom = {...columns[fromColumn]};
    let columnTo = {...columns[toColumn]};

    let cardsFrom = [...columnFrom.cards];
    let cardsTo = [...columnTo.cards];

    let cardIndex = findCardIndex(columnFrom, cardId);

    let movedCard = cardsFrom.splice(cardIndex, 1)[0];
    movedCard.columnId = toColumn;
    cardsTo.splice(toIndex, 0, movedCard);

    let updatedColumnFrom = changeCardsState(columnFrom, cardsFrom);
    let updatedColumnTo = changeCardsState(columnTo, cardsTo);
    let updatedColumns = updateItem(columns, updatedColumnFrom);
    updatedColumns = updateItem(updatedColumns, updatedColumnTo);
    return changeDataState(state, updatedColumns);
}

function changeDataState(state, newData) {
    return Object.assign(
        {},
        state,
        {
            data: newData
        }
    );
}

function changeCardsState(column, newCards) {
    return Object.assign(
        {},
        column,
        {
            cards: newCards
        }
    );
}

