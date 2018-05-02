import React from 'react';
import List from 'material-ui/List';
import CardDetails from '../Card/CardDetails';
import './ListCards.css';
import '../Scrollbar.css';

class ListCards extends React.Component {
    render() {
        const {
            cards,
            selectedCardId, onCardSelect,
            isEditPopupOpen,
            onCardEdit, onCardEditCancel,
            onCardUpdate,
            onCardDelete,
            onCardDrag
        } = this.props;

        return (
            <List className="list-cards scrollbar">
                {
                    cards.map((card, i) =>
                        <CardDetails
                            key={card.id}
                            index={i}
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
}

export default ListCards;
