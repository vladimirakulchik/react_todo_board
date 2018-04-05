import React from 'react';
import ListItem from 'material-ui/List';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import CardEditButton from './CardEditButton';
import './CardDetails.css';

class CardDetails extends React.Component {

    static truncate(text) {
        let maxSize = 350;
        let result = text;

        if ((text) && (text.length > maxSize)) {
            result = text.substr(0, maxSize) + "...";
        }

        return result;
    }

    static addStyle(index) {
        const className = "card-details-selected";
        let card = document.getElementsByClassName("card-details")[index];
        if (card) {
            card.classList.add(className);
        }
    }

    static removeStyle(index) {
        const className = "card-details-selected";
        let card = document.getElementsByClassName("card-details")[index];
        if (card) {
            card.classList.remove(className);
        }
    }

    render() {
        const {index, onSelect, title, text, color} = this.props;

        return (
            <ListItem className="list-cards-item" value={index} onClick={onSelect.bind(this, index)} >
                <Card className="card-details" style={{backgroundColor: color}}>
                    <CardEditButton
                        title={title}
                        text={text}
                        color={color}
                    />

                    <CardTitle className="card-title" title={title} />

                    <CardText className="card-text">
                        {CardDetails.truncate(text)}
                    </CardText>
                </Card>
            </ListItem>
        );
    }
}

export default CardDetails;
