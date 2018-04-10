import React from 'react';
import Paper from 'material-ui/Paper';
import Header from './Header';
import ListCards from '../ListCards/ListCards';
import AddCardButton from './AddCardButton';
import './Column.css';
import '../Scrollbar.css';

class Column extends React.Component {
    onCardAdd = (card) => {
        card.columnId = this.props.columnId;
        this.props.onCardAdd(card);
    };

    render() {
        const {title, cards, selectedCardId, onCardSelect} = this.props;

        return(
            <div className="column">
                <Paper className="column-content" zDepth={3}>
                    <Header title={title} />

                    <ListCards
                        cards={cards}
                        selectedCardId={selectedCardId}
                        onCardSelect={onCardSelect}
                    />

                    <AddCardButton onCardAdd={this.onCardAdd} />
                </Paper>
            </div>
        );
    }
}

export default Column;
