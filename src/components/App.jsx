import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar/AppToolbar';
import Column from './Column/Column';
import OptionalMenu from "./Menu/OptionalMenu";
import './App.css';
import './Scrollbar.css';

class App extends React.Component {
    state = {
        columnsData: [],
        nextColumnId: 0,
        nextCardId: 0,
        selectedCardId: null,
        bgColor: "#43A047",
        bgImage: "none"
    };

    componentWillMount() {
        this.addColumn("Default");
    };

    onColumnAdd = (title) => {
        this.addColumn(title);
    };

    addColumn(title) {
        let newColumn = {
            "id": "",
            "title": "",
            "cards": []
        };
        newColumn.id = this.state.nextColumnId;
        newColumn.title = title;

        this.setState({
            columnsData: [...this.state.columnsData, newColumn],
            nextColumnId: this.state.nextColumnId + 1
        });
    };

    onCardAdd = (card) => {
        card.id = this.state.nextCardId;
        this.addCard(card);
    };

    addCard(newCard) {
        const data = this.state.columnsData.map(column => {
            if (column.id === newCard.columnId) {
                column.cards = [...column.cards, newCard];
            }

            return column;
        });

        this.setState({
            columnsData: data,
            nextCardId: this.state.nextCardId + 1
        });
    };

    onCardSelect = (id) => {
        this.setState({
            selectedCardId: (this.state.selectedCardId !== id) ? id : null
        });
    };

    onCardUpdate = (updatedCard) => {
        const data = this.state.columnsData.map(column => {
            if (column.id === updatedCard.columnId) {
                column.cards = App.updateCards(column.cards, updatedCard);
            }

            return column;
        });

        this.setState({
            columnsData: data
        });
    };

    static updateCards(cards, updatedCard) {
        return cards.map(card => {
            if (card.id === updatedCard.id) {
                return updatedCard;
            }

            return card;
        });
    };

    onCardDelete = (deletedCard) => {
        const data = this.state.columnsData.map(column => {
            if (column.id === deletedCard.columnId) {
                column.cards = column.cards.filter(item => item.id !== deletedCard.id)
            }

            return column;
        });

        this.setState({
            columnsData: data
        });
    };

    onBackgroundChange = (background) => {
        document.getElementById("root").style.backgroundColor = background.color;
        document.getElementById("root").style.backgroundImage = background.photo;

        this.setState({
            bgColor: background.color,
            bgImage: background.photo
        })
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <div className="header">
                        <AppToolbar
                            onColumnAdd={this.onColumnAdd}
                        />
                    </div>

                    <div className="content">
                        <div className="board scrollbar">
                            {this.state.columnsData.map(column =>
                                <Column
                                    key={column.id}
                                    columnId={column.id}
                                    title={column.title}
                                    cards={column.cards}
                                    onCardAdd={this.onCardAdd}
                                    selectedCardId={this.state.selectedCardId}
                                    onCardSelect={this.onCardSelect}
                                    onCardUpdate={this.onCardUpdate}
                                    onCardDelete={this.onCardDelete}
                                />
                            )}
                        </div>

                        <div className="menu">
                            <OptionalMenu
                                onChange={this.onBackgroundChange}
                            />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
