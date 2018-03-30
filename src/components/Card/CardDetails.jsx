import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './CardDetails.css';

function CardDetails() {
    return (
        <Card className="card-details" style={{backgroundColor: "white"}}>
            <IconButton className="card-edit-btn">
                <ModeEdit />
            </IconButton>

            <CardTitle className="card-title" title="Card title" />

            <CardText className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
        </Card>
    );
}

export default CardDetails;
