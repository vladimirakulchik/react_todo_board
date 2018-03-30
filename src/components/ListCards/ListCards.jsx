import React from 'react';
import List from 'material-ui/List';
import Item from './Item';
import './ListCards.css';
import '../Scrollbar.css';

function ListCards() {
    return (
        <List className="list-cards scrollbar">
            <Item />
        </List>
    );
}

export default ListCards;
