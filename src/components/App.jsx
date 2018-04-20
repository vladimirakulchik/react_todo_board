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
        isEditPopupOpen: false
    };

    componentWillMount() {
        this.addColumn("Default");
        document.getElementsByTagName('body')[0].addEventListener("keydown", this.onKeyDown);
        document.getElementsByTagName('body')[0].addEventListener("mousedown", this.onMouseDown);
    };

    static setAppBackground(background) {
        document.getElementById("root").style.backgroundColor = background.bgColor;
        document.getElementById("root").style.backgroundImage = background.bgImage;
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
        this.setState({
            nextCardId: this.state.nextCardId + 1
        });
    };

    addCard(newCard) {
        const data = this.state.columnsData.map(column => {
            if (column.id === newCard.columnId) {
                column.cards = [...column.cards, newCard];
            }

            return column;
        });

        this.setState({
            columnsData: data
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
        this.deselectCard();
    };

    handleEnterKey() {
        if (this.state.selectedCardId != null) {
            this.openEditPopup();
        }
    };

    moveCardUp() {
        let id = this.state.selectedCardId;
        let columns = this.state.columnsData;

        let column = columns.find(column =>
            column.cards.findIndex(card => card.id === id) !== -1
        );

        let from = column.cards.findIndex(card => card.id === id);
        let to = from - 1;

        if (to >= 0) {
            column.cards.splice(to, 0, column.cards.splice(from, 1)[0]);
            this.setState({
                columnsData: columns
            });
        }
    };

    moveCardDown() {
        let id = this.state.selectedCardId;
        let columns = this.state.columnsData;

        let column = columns.find(column =>
            column.cards.findIndex(card => card.id === id) !== -1
        );

        let from = column.cards.findIndex(card => card.id === id);
        let to = from + 1;

        if (to < column.cards.length) {
            column.cards.splice(to, 0, column.cards.splice(from, 1)[0]);
            this.setState({
                columnsData: columns
            });
        }
    };

    moveCardLeft() {
        let id = this.state.selectedCardId;
        let columns = this.state.columnsData;

        let from = columns.findIndex(column =>
            column.cards.find(card => card.id === id) !== undefined
        );
        let to = from - 1;

        if (to >= 0) {
            let columnFrom = columns[from];
            let columnTo = columns[to];
            let cardIndex = columnFrom.cards.findIndex(card => card.id === id);

            let movedCard = columnFrom.cards.splice(cardIndex, 1)[0];
            movedCard.columnId = to;
            columnTo.cards = [...columnTo.cards, movedCard];

            this.setState({
                columnsData: columns
            });
        }
    };

    moveCardRight() {
        let id = this.state.selectedCardId;
        let columns = this.state.columnsData;

        let from = columns.findIndex(column =>
            column.cards.find(card => card.id === id) !== undefined
        );
        let to = from + 1;

        if (to < columns.length) {
            let columnFrom = columns[from];
            let columnTo = columns[to];
            let cardIndex = columnFrom.cards.findIndex(card => card.id === id);

            let movedCard = columnFrom.cards.splice(cardIndex, 1)[0];
            movedCard.columnId = to;
            columnTo.cards = [...columnTo.cards, movedCard];

            this.setState({
                columnsData: columns
            });
        }
    };

    static setCardFocus(id) {
        let cards = document.getElementsByClassName("card-details");

        for (let item of cards) {
            if (item.getAttribute("value") === id.toString()) {
                item.focus();
            }
        }
    };

    isKeyBoardAllowed() {
        return ((this.state.selectedCardId !== null) &&
            !this.state.isEditPopupOpen);
    };

    onKeyDown = (e) => {
        if (this.isKeyBoardAllowed()) {
            switch (e.key) {
                case "Enter":
                    this.handleEnterKey();
                    break;

                case "ArrowUp":
                    this.moveCardUp();
                    break;

                case "ArrowDown":
                    this.moveCardDown();
                    break;

                case "ArrowLeft":
                    this.moveCardLeft();
                    App.setCardFocus(this.state.selectedCardId);
                    break;

                case "ArrowRight":
                    this.moveCardRight();
                    App.setCardFocus(this.state.selectedCardId);
                    break;

                default:
                    break;
            }
        }
    };

    onMouseDown = (e) => {
        if (this.state.selectedCardId != null) {
            let names = e.path.map(element => {
                return element.className;
            });

            let index = names.findIndex(name =>
                (name != null)
                    ? name.toString() === "card-details"
                    : false
            );

            if ((index === -1) && !this.state.isEditPopupOpen) {
                this.deselectCard();
            }
        }
    };

    render() {
        const {background, onBackgroundChange} = this.props;

        App.setAppBackground(background);

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
                                onChange={onBackgroundChange}
                            />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
