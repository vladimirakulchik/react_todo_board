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
        return (
            <List className="list-cards scrollbar">
                <CardDetails
                    index={0}
                    title="Card title"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat."
                    color="white"
                    onSelect={this.handleSelect}
                />
                <CardDetails
                    index={1}
                    title="Card title"
                    text="Lorem ipsum dolor sit amet, conse ctetur adipis cing elit."
                    color="white"
                    onSelect={this.handleSelect}
                />
            </List>
        );
    }

}

export default ListCards;
