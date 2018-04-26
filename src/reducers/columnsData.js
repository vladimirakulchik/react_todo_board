import { COLUMN_ADD, CARD_ADD, CARD_UPDATE, CARD_DELETE,
    MOVE_CARD_UP, MOVE_CARD_DOWN, MOVE_CARD_LEFT, MOVE_CARD_RIGHT } from "../constants/ActionTypes";

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
            let cardId = action.id;
            let columns = [...state.data];
            let column = {...findColumn(columns, cardId)};
            let cards = [...column.cards];
            let from = findCardIndex(column, cardId);
            let to = from - 1;

            if (to >= 0) {
                cards.splice(to, 0, cards.splice(from, 1)[0]);

                let updatedColumn = changeCardsState(column, cards);
                let updatedColumns = updateItem(columns, updatedColumn);
                return changeDataState(state, updatedColumns);
            }

            return state;
        }

        case MOVE_CARD_DOWN: {
            let cardId = action.id;
            let columns = [...state.data];
            let column = {...findColumn(columns, cardId)};
            let cards = [...column.cards];
            let from = findCardIndex(column, cardId);
            let to = from + 1;

            if (to < cards.length) {
                cards.splice(to, 0, cards.splice(from, 1)[0]);

                let updatedColumn = changeCardsState(column, cards);
                let updatedColumns = updateItem(columns, updatedColumn);
                return changeDataState(state, updatedColumns);
            }

            return state;
        }

        case MOVE_CARD_LEFT: {
            let cardId = action.id;
            let columns = [...state.data];
            let from = findColumnIndex(columns, cardId);
            let to = from - 1;

            if (to >= 0) {
                return horizontalMove(state, cardId, from, to);
            }

            return state;
        }

        case MOVE_CARD_RIGHT: {
            let cardId = action.id;
            let columns = state.data;
            let from = findColumnIndex(columns, cardId);
            let to = from + 1;

            if (to < columns.length) {
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

function findCardIndex(column, cardId) {
    return column.cards.findIndex(card => card.id === cardId);
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

