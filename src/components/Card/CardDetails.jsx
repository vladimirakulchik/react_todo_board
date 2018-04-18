import React from 'react';
import ListItem from 'material-ui/List';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import CardEditButton from './CardEditButton';
import './CardDetails.css';

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

        let isOpen = ((id === selectedId) && isEditPopupOpen);

        return (
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

export default CardDetails;
