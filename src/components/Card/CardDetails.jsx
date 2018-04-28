import React from 'react';
import ListItem from 'material-ui/List';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import CardEditButton from './CardEditButton';
import { CARD_TYPE } from '../../constants/ItemTypes';
import './CardDetails.css';

const source = {
    beginDrag(props) {
        return {
            id: props.card.id,
            index: props.index
        };
    },

    // endDrag(props, monitor) {
    //     console.log("monitor", monitor.didDrop());
    //     console.log("item", monitor.getItem());
    //
    //
    //     const { cardId, originalIndex } = monitor.getItem();
    //     const didDrop = monitor.didDrop();
    //
    //     if (!didDrop) {
    //         props.onCardDragVertical(cardId, originalIndex, originalIndex);
    //     }
    // }
};

const target = {
    // canDrop() {
    //     return false;
    // },

    hover(props, monitor, component) {
        const dragId = monitor.getItem().id;
        const dragIndex = monitor.getItem().index;
        const hoverId = props.card.id;
        const hoverIndex = props.index;

        // console.log("dragId", dragId, "dragIndex", dragIndex, "hoverId", hoverId, "hoverIndex", hoverIndex);

        if (dragIndex === hoverIndex) {
            return;
        }

        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        props.onCardDragVertical(props.card.id, dragIndex, hoverIndex);

        monitor.getItem().index = hoverIndex;
    }
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
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
        const { isDragging, connectDragSource, connectDropTarget } = this.props;

        let isOpen = ((id === selectedId) && isEditPopupOpen);

        return connectDragSource(
            connectDropTarget(
                <div className="drag-item" style={{ opacity: isDragging ? 0 : 1 }}>
                    <ListItem className="list-cards-item" onClick={onCardSelect.bind(this, id)} >
                        <Card className="card-details" value={id} tabIndex={-1} style={{backgroundColor: color}}>
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

                            <CardTitle className="card-title" title={CardDetails.truncate(title, 15)} />

                            <CardText className="card-text">
                                {CardDetails.truncate(text)}
                            </CardText>
                        </Card>
                    </ListItem>
                </div>
            )
        );
    };

    static truncate(text, size) {
        let maxSize = (size != null) ? size : 350;
        let result = text;

        if ((text) && (text.length > maxSize)) {
            result = text.substr(0, maxSize) + "...";
        }

        return result;
    };
}

export default DropTarget(CARD_TYPE, target, collectTarget)(DragSource(CARD_TYPE, source, collectSource)(CardDetails));
