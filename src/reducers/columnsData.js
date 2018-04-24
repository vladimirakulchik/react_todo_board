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
                    data: changeData(state.data, newCard, addCard),
                    nextCardId: state.nextCardId + 1
                }
            );
        }

        case CARD_UPDATE: {
            return assignDataState(
                state,
                changeData(state.data, action.card, updateCard)
            );
        }

        case CARD_DELETE: {
            return assignDataState(
                state,
                changeData(state.data, action.card, deleteCard)
            );
        }

        case MOVE_CARD_UP: {
            let cardId = action.id;
            let columns = [...state.data];
            let column = findColumn(columns, cardId);

            let from = findCardIndex(column, cardId);
            let to = from - 1;

            if (to >= 0) {
                column.cards.splice(to, 0, column.cards.splice(from, 1)[0]);

                return assignDataState(state, columns);
            } else {
                return state;
            }
        }

        case MOVE_CARD_DOWN: {
            let cardId = action.id;
            let columns = [...state.data];
            let column = findColumn(columns, cardId);

            let from = findCardIndex(column, cardId);
            let to = from + 1;

            if (to >= 0) {
                column.cards.splice(to, 0, column.cards.splice(from, 1)[0]);

                return assignDataState(state, columns);
            } else {
                return state;
            }
        }

        case MOVE_CARD_LEFT: {
            let cardId = action.id;
            let columns = [...state.data];

            let from = findColumnIndex(columns, cardId);
            let to = from - 1;

            if (to >= 0) {
                let columnFrom = columns[from];
                let columnTo = columns[to];
                let cardIndex = findCardIndex(columnFrom, cardId);

                let movedCard = columnFrom.cards.splice(cardIndex, 1)[0];
                movedCard.columnId = to;
                columnTo.cards = [...columnTo.cards, movedCard];

                return assignDataState(state, columns);
            } else {
                return state;
            }
        }

        case MOVE_CARD_RIGHT: {
            let cardId = action.id;
            let columns = [...state.data];

            let from = findColumnIndex(columns, cardId);
            let to = from + 1;

            if (to < columns.length) {
                let columnFrom = columns[from];
                let columnTo = columns[to];
                let cardIndex = findCardIndex(columnFrom, cardId);

                let movedCard = columnFrom.cards.splice(cardIndex, 1)[0];
                movedCard.columnId = to;
                columnTo.cards = [...columnTo.cards, movedCard];

                return assignDataState(state, columns);
            } else {
                return state;
            }
        }

        default:
            return state;
    }
}

function changeData(data, modifiedCard, modifiedAction) {
    return data.map(column => {
        if (column.id === modifiedCard.columnId) {
            column.cards = modifiedAction(column.cards, modifiedCard);
        }

        return column;
    })
}

function addCard(cards, newCard) {
    return [...cards, newCard];
}

function updateCard(cards, updatedCard) {
    return cards.map(card => {
        if (card.id === updatedCard.id) {
            return updatedCard;
        }

        return card;
    });
}

function deleteCard(cards, deletedCard) {
    return cards.filter(item =>
        item.id !== deletedCard.id
    );
}

function findColumn(columns, cardId) {
    return columns.find(column =>
        findCardIndex(column, cardId) !== -1
    );
}

function findColumnIndex(columns, cardId) {
    return columns.findIndex(column =>
        findCardIndex(column, cardId) !== -1
    );
}

function findCardIndex(column, cardId) {
    return column.cards.findIndex(card => card.id === cardId);
}

function assignDataState(state, newData) {
    return Object.assign(
        {},
        state,
        {
            data: newData
        }
    );
}
