import React from 'react';
import List from 'material-ui/List';
import Item from './Item';
import './ListCards.css';
import '../Scrollbar.css';

function ListCards() {
    return (
        <List className="list-cards scrollbar">
            <Item
                title="Card title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat."
                color="white"
            />
        </List>
    );
}

export default ListCards;
