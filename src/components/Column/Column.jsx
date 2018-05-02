import React from 'react';
import { DropTarget } from 'react-dnd';
import Paper from 'material-ui/Paper';
import Header from './Header';
import ListCards from '../ListCards/ListCards';
import AddCardButton from './AddCardButton';
import './Column.css';
import { CARD_TYPE } from '../../constants/ItemTypes';
import '../Scrollbar.css';

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
    }
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
                <Paper className="column-content" zDepth={3}>
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

export default DropTarget(CARD_TYPE, target, collectTarget)(Column);
