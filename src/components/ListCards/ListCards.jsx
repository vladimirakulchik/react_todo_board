import React from "react";
import {withStyles} from "@material-ui/core/styles/index";
import List from "@material-ui/core/List";
import CardDetails from "../Card/CardDetails";
import "../Scrollbar.css";

const styles = {
    listCards: {
        flex: "1 1 auto",
        overflowY: "auto",
        overflowX: "hidden",
        margin: "0 4px",
        padding: "0 4px",
        minHeight: 0
    }
};

function ListCards(props) {
    const {
        classes,
        cards,
        selectedCardId, onCardSelect,
        isEditPopupOpen,
        onCardEdit, onCardEditCancel,
        onCardUpdate,
        onCardDelete,
        onCardDrag
    } = props;

    return (
        <List
            className="scrollbar"
            classes={{root: classes.listCards}}
        >
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

export default withStyles(styles)(ListCards);
