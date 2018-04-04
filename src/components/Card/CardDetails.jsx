import React from 'react';
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

    render() {
        const {title, text, color} = this.props;

        return (
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
        );
    }
}

export default CardDetails;
