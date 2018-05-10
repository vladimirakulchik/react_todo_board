import { connect } from "react-redux";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import * as actions from "../actions";
import App from "../components/App";

const mapStateToProps = (state) => ({
    background: state.present.background,
    columnsData: state.present.columnsData.data,
    selectedCardId: state.present.selectedCardId,
    cardEditing: state.present.cardEditing,
    menuOpen: state.present.menuOpen
});

const mapDispatchToProps = (dispatch) => ({
    onBackgroundChange: (background) => dispatch(actions.changeBackground(background)),
    openEditPopup: () => dispatch(actions.openEditPopup()),
    closeEditPopup: () => dispatch(actions.closeEditPopup()),
    openMenu: () => dispatch(actions.openMenu()),
    closeMenu: () => dispatch(actions.closeMenu()),
    onColumnAdd: (title) => dispatch(actions.columnAdd(title)),
    onCardAdd: (card) => dispatch(actions.cardAdd(card)),
    onCardUpdate: (card) => dispatch(actions.cardUpdate(card)),
    onCardDelete: (card) => dispatch(actions.cardDelete(card)),
    selectCard: (id) => dispatch(actions.cardSelect(id)),
    deselectCard: () => dispatch(actions.cardDeselect()),
    moveCardUp: (id) => dispatch(actions.moveCardUp(id)),
    moveCardDown: (id) => dispatch(actions.moveCardDown(id)),
    moveCardLeft: (id) => dispatch(actions.moveCardLeft(id)),
    moveCardRight: (id) => dispatch(actions.moveCardRight(id)),
    onCardDrag: (id, hoverId) => dispatch(actions.dragCard(id, hoverId)),
    onCardDragToColumn: (id, columnId) => dispatch(actions.dragCardToColumn(id, columnId)),
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
