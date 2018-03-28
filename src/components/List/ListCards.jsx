import React from 'react';
import Paper from 'material-ui/Paper';
import ListHeader from './ListHeader';
import AddCardButton from './AddCardButton';
import './ListCards.css';
import '../Scrollbar.css';

class ListCards extends React.Component {
    render() {
        return(
            <div className="list">
                <Paper className="list-content" zDepth={3}>
                    <ListHeader title="List title" />

                    <div className="list-cards scrollbar">
                        CARD
                    </div>

                    <AddCardButton />
                </Paper>
            </div>
        );
    }
}

export default ListCards;
