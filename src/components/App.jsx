import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar/AppToolbar';
import Column from './Column/Column';
import './App.css';
import './Scrollbar.css';

class App extends React.Component {
    state = {
        data: [],
        nextListId: 0
    };

    componentWillMount() {
        this.addList("Default");
    };

    onListAdd = (title) => {
        this.addList(title);
    };

    addList(title) {
        let createdItem = {
            "id": "",
            "title": "",
            "cards": []
        };
        createdItem.id = this.state.nextListId;
        createdItem.title = title;
        const data = [...this.state.data, createdItem];

        this.setState({
            data: data,
            nextListId: this.state.nextListId + 1
        });
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <div className="header">
                        <AppToolbar onListAdd={this.onListAdd} />
                    </div>

                    <div className="content">
                        <div className="board scrollbar">
                            {this.state.data.map(column =>
                                <Column
                                    key={column.id}
                                    title={column.title}
                                    cards={column.cards}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
