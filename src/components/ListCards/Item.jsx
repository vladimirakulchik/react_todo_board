import React from 'react';
import ListItem from 'material-ui/List';
import CardDetails from '../Card/CardDetails';
import './Item.css';

function Item() {
    return (
        <ListItem className="list-cards-item">
            <CardDetails color="white"/>
        </ListItem>
    );
}

export default Item;
