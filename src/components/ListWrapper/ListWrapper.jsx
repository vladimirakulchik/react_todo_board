import React from 'react';
import Paper from 'material-ui/Paper';
import ListHeader from './WrapperHeader';
import ListCards from '../ListCards/ListCards';
import AddCardButton from './AddCardButton';
import './ListWrapper.css';
import '../Scrollbar.css';

class ListWrapper extends React.Component {
    render() {
        return(
            <div className="list-wrapper">
                <Paper className="list-content" zDepth={3}>
                    <ListHeader title="List title" />

                    <ListCards />

                    <AddCardButton />
                </Paper>
            </div>
        );
    }
}

export default ListWrapper;
