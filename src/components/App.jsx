import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar/AppToolbar';
import Column from './Column/Column';
import OptionalMenu from "./Menu/OptionalMenu";
import './App.css';
import './Scrollbar.css';

class App extends React.Component {
    state = {
        bgColor: "#43A047",
        bgImage: "none",
        columnsData: [],
        nextColumnId: 0,
        nextCardId: 0,
        selectedCardId: null,
        isEditPopupOpen: false
    };

    componentWillMount() {
        this.addColumn("Default");
        document.getElementsByTagName('body')[0].addEventListener("keydown", this.onKeyDown);
    };

    onBackgroundChange = (background) => {
        document.getElementById("root").style.backgroundColor = background.color;
        document.getElementById("root").style.backgroundImage = background.photo;

        this.setState({
            bgColor: background.color,
            bgImage: background.photo
        })
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
        this.closeEditPopup();
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

    onCardUpdate = (updatedCard) => {
        this.closeEditPopup();
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
        this.closeEditPopup();
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

    onCardSelect = (id) => {
        this.selectCard(id);
    };

    onCardEdit = (id) => {
        this.selectCard(id);
        this.openEditPopup();
    };

    onCardEditCancel = () => {
        this.closeEditPopup();
        this.deselectCard();
    };

    selectCard(id) {
        this.setState({
            selectedCardId: id
        });
    };

    deselectCard() {
        this.setState({
            selectedCardId: null
        });
    };

    openEditPopup() {
        this.setState({
            isEditPopupOpen: true
        });
    };

    closeEditPopup() {
        this.setState({
            isEditPopupOpen: false
        });
    };

    handleEnterKey() {
        if (this.state.selectedCardId != null) {
            this.openEditPopup();
        }
    };

    onKeyDown = (e) => {
        if ((this.state.selectedCardId !== null) && !this.state.isEditPopupOpen) {

            switch (e.key) {
                case "Enter":
                    this.handleEnterKey();
                    break;

                case "ArrowUp":
                    alert("up");
                    break;

                case "ArrowDown":
                    alert("down");
                    break;

                case "ArrowLeft":
                    alert("left");
                    break;

                case "ArrowRight":
                    alert("right");
                    break;

                default:
                    break;
            }
        }
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

                                    isEditPopupOpen={this.state.isEditPopupOpen}
                                    onCardEdit={this.onCardEdit}
                                    onCardEditCancel={this.onCardEditCancel}

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
