import React from 'react';
import List from 'material-ui/List';
import CardDetails from '../Card/CardDetails';
import './ListCards.css';
import '../Scrollbar.css';

class ListCards extends React.Component {
    state = {
        selectedIndex: null
    };

    handleSelect = (index) => {
        CardDetails.removeStyle(this.state.selectedIndex);

        if (this.state.selectedIndex === index) {
            this.setState({
                selectedIndex: null
            });
        } else {
            CardDetails.addStyle(index);
            this.setState({
                selectedIndex: index
            });
        }
    };

    render() {
        const {cards} = this.props;

        return (
            <List className="list-cards scrollbar">
                {
                    cards.map(card =>
                        <CardDetails
                            card={card}
                            onSelect={this.handleSelect}
                        />
                    )
                }
            </List>
        );
    }
}

export default ListCards;
