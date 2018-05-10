import React from "react";
import Column from "../Column/Column";

function Board(props) {
    const {columnsData,
        onCardAdd,
        onCardUpdate,
        onCardDelete,
        selectedCardId,
        onCardSelect,
        isEditPopupOpen,
        onCardEdit,
        onCardEditCancel,
        onCardDrag,
        onCardDragToColumn
    } = props;

    return (
        <React.Fragment>
            {columnsData.map(column =>
                <Column
                    key={column.id}
                    columnId={column.id}
                    title={column.title}
                    cards={column.cards}

                    onCardAdd={onCardAdd}
                    onCardUpdate={onCardUpdate}
                    onCardDelete={onCardDelete}

                    selectedCardId={selectedCardId}
                    onCardSelect={onCardSelect}

                    isEditPopupOpen={isEditPopupOpen}
                    onCardEdit={onCardEdit}
                    onCardEditCancel={onCardEditCancel}

                    onCardDrag={onCardDrag}
                    onCardDragToColumn={onCardDragToColumn}
                />
            )}
        </React.Fragment>
    );
}

export default Board;
