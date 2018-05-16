import React from "react";
import { DropTarget } from "react-dnd";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Header from "./Header";
import ListCards from "../ListCards/ListCards";
import AddCardButton from "./AddCardButton";
import { CARD_TYPE } from "../../constants/ItemTypes";
import "../Scrollbar.css";
import "./Column.css";

const styles = {
    columnContent: {
        backgroundColor: "#EEEEEE",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        minHeight: "70px",
        position: "relative",
        whiteSpace: "normal"
    }
};

const target = {
    hover(props, monitor) {
        const dragCardId = monitor.getItem().id;
        const hoverColumnId = props.columnId;

        props.onCardDragToColumn(dragCardId, hoverColumnId);
    }
};

function collectTarget(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

class Column extends React.Component {
    onCardAdd = (card) => {
        card.columnId = this.props.columnId;
        this.props.onCardAdd(card);
    };

    onCardUpdate = (card) => {
        card.columnId = this.props.columnId;
        this.props.onCardUpdate(card);
    };

    onCardDelete = (card) => {
        card.columnId = this.props.columnId;
        this.props.onCardDelete(card);
    };

    render() {
        const {
            classes,
            title,
            cards,
            selectedCardId, onCardSelect,
            isEditPopupOpen,
            onCardEdit, onCardEditCancel,
            onCardDrag,
            connectDropTarget
        } = this.props;

        return connectDropTarget(
            <div className="column">
                <Paper classes={{root: classes.columnContent}} elevation={5}>
                    <Header title={title} />

                    <ListCards
                        cards={cards}

                        selectedCardId={selectedCardId}
                        onCardSelect={onCardSelect}

                        isEditPopupOpen={isEditPopupOpen}
                        onCardEdit={onCardEdit}
                        onCardEditCancel={onCardEditCancel}

                        onCardUpdate={this.onCardUpdate}
                        onCardDelete={this.onCardDelete}

                        onCardDrag={onCardDrag}
                    />

                    <AddCardButton onCardAdd={this.onCardAdd} />
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(DropTarget(CARD_TYPE, target, collectTarget)(Column));
