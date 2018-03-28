import React from 'react';
import Paper from 'material-ui/Paper';
import './ListCards.css';
import '../Scrollbar.css';

class ListCards extends React.Component {
    render() {
        return(
            <div className="list">
                <Paper className="list-content" zDepth={3}>
                    <div className="list-header">
                        HEADER
                    </div>

                    <div className="list-cards scrollbar">
                        CARD
                    </div>

                    <div className="list-add-card-btn">
                        BUTTON
                    </div>
                </Paper>
            </div>
        );
    }
}

export default ListCards;
