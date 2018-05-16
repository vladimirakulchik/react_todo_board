import React from "react";
import { DragSource, DropTarget } from "react-dnd";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardEditButton from "./CardEditButton";
import { CARD_TYPE } from "../../constants/ItemTypes";
import "./CardDetails.css";

const styles = {
    listCardsItem: {
        padding: "0"
    },
    cardDetails: {
        minHeight: "50px",
        width: "100%",
        cursor: "pointer",
        "&:focus": {
            border: "3px solid #6D14AB"
        }
    },
    cardContent: {
        padding: "0px",
        "&:last-child": {
            padding: "0"
        }
    },
    cardTitle: {
        padding: "6px 6px 2px 8px"
    },
    cardDescription: {
        padding: "6px 6px 6px 8px"
    }
};

const source = {
    beginDrag(props) {
        return {
            id: props.card.id
        };
    },

    isDragging(props, monitor) {
        return monitor.getItem().id === props.card.id;
    }
};

const target = {
    hover(props, monitor) {
        const dragId = monitor.getItem().id;
        const hoverId = props.card.id;

        if (dragId === hoverId) {
            return;
        }

        props.onCardDrag(dragId, hoverId);
    }
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

function collectTarget(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

class CardDetails extends React.Component {
    onCardUpdate = (card) => {
        card.id = this.props.card.id;
        this.props.onCardUpdate(card);
    };

    onCardDelete = (card) => {
        card.id = this.props.card.id;
        this.props.onCardDelete(card);
    };

    render() {
        const {id, title, text, color} = this.props.card;
        const {selectedId, onCardSelect, isEditPopupOpen, onCardEdit, onCardEditCancel} = this.props;
        const {classes, isDragging, connectDragSource, connectDropTarget} = this.props;

        let isOpen = ((id === selectedId) && isEditPopupOpen);

        return connectDragSource(
            connectDropTarget(
                <div className="drag-item" style={{opacity: (isDragging) ? 0.3 : 1}}>
                    <ListItem classes={{root: classes.listCardsItem}}
                        onClick={onCardSelect.bind(this, id)}
                    >
                        <Card classes={{root: classes.cardDetails}}
                            className="card-details"
                            value={id}
                            tabIndex={-1}
                            style={{backgroundColor: color}}
                        >
                            <CardContent classes={{root: classes.cardContent}}
                                style={{opacity: (isDragging) ? 0 : 1}}
                            >
                                <Typography classes={{root: classes.cardTitle}}
                                    variant="headline"
                                    component="h3"
                                >
                                    {CardDetails.truncate(title, 15)}
                                </Typography>

                                <Typography classes={{root: classes.cardDescription}}
                                    variant="body1"
                                    component="p"
                                >
                                    {CardDetails.truncate(text)}
                                </Typography>

                                <CardEditButton
                                    title={title}
                                    text={text}
                                    color={color}
                                    isOpen={isOpen}
                                    onCardEdit={onCardEdit.bind(this, id)}
                                    onCardEditCancel={onCardEditCancel}
                                    onCardUpdate={this.onCardUpdate}
                                    onCardDelete={this.onCardDelete}
                                />
                            </CardContent>
                        </Card>
                    </ListItem>
                </div>
            )
        );
    }

    static truncate(text, size) {
        let maxSize = (size != null) ? size : 350;
        let result = text;

        if ((text) && (text.length > maxSize)) {
            result = text.substr(0, maxSize) + "...";
        }

        return result;
    }
}

export default withStyles(styles)(DropTarget(CARD_TYPE, target, collectTarget)(DragSource(CARD_TYPE, source, collectSource)(CardDetails)));
