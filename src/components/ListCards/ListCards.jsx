import React from 'react';
import List from 'material-ui/List';
import CardDetails from '../Card/CardDetails';
import './ListCards.css';
import '../Scrollbar.css';

class ListCards extends React.Component {
    render() {
        const {cards, selectedCardId, onCardSelect} = this.props;

        return (
            <List className="list-cards scrollbar">
                {
                    cards.map(card =>
                        <CardDetails
                            id={card.id}
                            key={card.id}
                            card={card}
                            selectedId={selectedCardId}
                            onSelect={onCardSelect}
                        />
                    )
                }
            </List>
        );
    }
}

export default ListCards;
