import React from "react";
import List from "material-ui/List";
import CardDetails from "../Card/CardDetails";
import "./ListCards.css";
import "../Scrollbar.css";

function ListCards(props) {
    const {
        cards,
        selectedCardId, onCardSelect,
        isEditPopupOpen,
        onCardEdit, onCardEditCancel,
        onCardUpdate,
        onCardDelete,
        onCardDrag
    } = props;

    return (
        <List className="list-cards scrollbar">
            {
                cards.map(card =>
                    <CardDetails
                        key={card.id}
                        card={card}

                        selectedId={selectedCardId}
                        onCardSelect={onCardSelect}

                        isEditPopupOpen={isEditPopupOpen}
                        onCardEdit={onCardEdit}
                        onCardEditCancel={onCardEditCancel}

                        onCardUpdate={onCardUpdate}
                        onCardDelete={onCardDelete}

                        onCardDrag={onCardDrag}
                    />
                )
            }
        </List>
    );
}

export default ListCards;
