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
        const {selectedId, onSelect} = this.props;

        if (id === selectedId) {
            CardDetails.selectCard(id);
        } else {
            CardDetails.deselectCard(id);
        }

        return (
            <ListItem className="list-cards-item" value={id} onClick={onSelect.bind(this, id)} >
                <Card className="card-details" style={{backgroundColor: color}}>
                    <CardEditButton
                        title={title}
                        text={text}
                        color={color}
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

    static selectCard(id) {
        if (id != null) {
            CardDetails.addClassStyle(CardDetails.getCard(id));
        }
    };

    static deselectCard(id) {
        if (id != null) {
            CardDetails.removeClassStyle(CardDetails.getCard(id));
        }
    };

    static getCard(id) {
        let listCards = document.getElementsByClassName("list-cards-item");
        for (let item of listCards) {
            if (item.getAttribute("value") === id.toString()) {
                return item.getElementsByClassName("card-details")[0];
            }
        }
        return null;
    };

    static className = "card-details-selected";

    static addClassStyle(card) {
        if (card != null) {
            card.classList.add(this.className);
        }
    };

    static removeClassStyle(card) {
        if (card != null) {
            card.classList.remove(this.className);
        }
    };
}

export default CardDetails;
