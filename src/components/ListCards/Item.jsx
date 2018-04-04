import React from 'react';
import ListItem from 'material-ui/List';
import CardDetails from '../Card/CardDetails';
import './Item.css';

function Item(props) {
    return (
        <ListItem className="list-cards-item">
            <CardDetails
                title={props.title}
                text={props.text}
                color={props.color}
            />
        </ListItem>
    );
}

export default Item;
