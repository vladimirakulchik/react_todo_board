import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
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
        return (
            <Card className="card-details" style={{backgroundColor: "white"}}>
                <IconButton className="card-edit-btn">
                    <ModeEdit />
                </IconButton>

                <CardTitle className="card-title" title="Card title" />

                <CardText className="card-text">
                    {CardDetails.truncate("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.")}
                </CardText>
            </Card>
        );
    }
}

export default CardDetails;
