import React from 'react';
import Paper from 'material-ui/Paper';
import Header from './Header';
import ListCards from '../ListCards/ListCards';
import AddCardButton from './AddCardButton';
import './Column.css';
import '../Scrollbar.css';

class Column extends React.Component {
    render() {
        return(
            <div className="column">
                <Paper className="column-content" zDepth={3}>
                    <Header title={this.props.title} />

                    <ListCards />

                    <AddCardButton />
                </Paper>
            </div>
        );
    }
}

export default Column;
