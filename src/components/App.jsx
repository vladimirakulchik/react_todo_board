import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import AppToolbar from './AppToolbar/AppToolbar';
import Column from './Column/Column';
import OptionalMenu from "./Menu/OptionalMenu";
import './App.css';
import './Scrollbar.css';

class App extends React.Component {
    componentWillMount() {
        document.getElementsByTagName('body')[0].addEventListener("keydown", this.onKeyDown);
        document.getElementsByTagName('body')[0].addEventListener("mousedown", this.onMouseDown);
    };

    static setAppBackground(background) {
        document.getElementById("root").style.backgroundColor = background.bgColor;
        document.getElementById("root").style.backgroundImage = background.bgImage;
    };

    onCardUpdate = (updatedCard) => {
        this.props.deselectCard();
        this.props.closeEditPopup();
        this.props.onCardUpdate(updatedCard);
    };

    onCardDelete = (deletedCard) => {
        this.props.deselectCard();
        this.props.closeEditPopup();
        this.props.onCardDelete(deletedCard);
    };

    onCardEdit = (id) => {
        this.props.selectCard(id);
        this.props.openEditPopup();
    };

    onCardEditCancel = () => {
        this.props.deselectCard();
        this.props.closeEditPopup();
    };

    startEditCard() {
        if (this.props.selectedCardId != null) {
            this.props.openEditPopup();
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
        return ((this.props.selectedCardId !== null) && !this.props.cardEditing);
    };

    onKeyDown = (e) => {
        if (this.isKeyBoardAllowed()) {
            switch (e.key) {
                case "Enter":
                    this.startEditCard();
                    break;

                case "ArrowUp":
                    this.props.moveCardUp(this.props.selectedCardId);
                    break;

                case "ArrowDown":
                    this.props.moveCardDown(this.props.selectedCardId);
                    break;

                case "ArrowLeft":
                    this.props.moveCardLeft(this.props.selectedCardId);
                    App.setCardFocus(this.props.selectedCardId);
                    break;

                case "ArrowRight":
                    this.props.moveCardRight(this.props.selectedCardId);
                    App.setCardFocus(this.props.selectedCardId);
                    break;

                default:
                    break;
            }
        }

        switch (e.key) {
            case "z":
                if (e.ctrlKey) {
                    this.props.onUndo();
                }
                break;

            case "y":
                if (e.ctrlKey) {
                    this.props.onRedo();
                }
                break;

            default:
                break;
        }
    };

    onMouseDown = (e) => {
        if (this.props.selectedCardId != null) {
            let names = e.path.map(element => {
                return element.className;
            });

            let index = names.findIndex(name =>
                (name != null)
                    ? name.toString() === "card-details"
                    : false
            );

            if ((index === -1) && !this.props.cardEditing) {
                this.props.deselectCard();
            }
        }
    };

    render() {
        const {
            background,
            onBackgroundChange,
            columnsData,
            onColumnAdd,
            onCardAdd,
            selectCard,
            onCardDragVertical,
            onUndo,
            onRedo
        } = this.props;

        App.setAppBackground(background);

        return (
            <MuiThemeProvider>
                <div className="app">
                    <div className="header">
                        <AppToolbar
                            onColumnAdd={onColumnAdd}
                            onUndo={onUndo}
                            onRedo={onRedo}
                        />
                    </div>

                    <div className="content">
                        <div className="board scrollbar">
                            {columnsData.map(column =>
                                <Column
                                    key={column.id}
                                    columnId={column.id}
                                    title={column.title}
                                    cards={column.cards}
                                    onCardAdd={onCardAdd}

                                    selectedCardId={this.props.selectedCardId}
                                    onCardSelect={selectCard}

                                    isEditPopupOpen={this.props.cardEditing}
                                    onCardEdit={this.onCardEdit}
                                    onCardEditCancel={this.onCardEditCancel}

                                    onCardUpdate={this.onCardUpdate}
                                    onCardDelete={this.onCardDelete}

                                    onCardDragVertical={onCardDragVertical}
                                />
                            )}
                        </div>

                        <div className="menu">
                            <OptionalMenu
                                onBackgroundChange={onBackgroundChange}
                            />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
