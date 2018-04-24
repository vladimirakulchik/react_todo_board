import { connect } from 'react-redux'
import { changeBackground, openEditPopup, closeEditPopup,
    columnAdd, cardAdd, cardUpdate, cardDelete, cardSelect, cardDeselect,
    moveCardUp, moveCardDown, moveCardLeft, moveCardRight} from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => ({
    background: state.background,
    columnsData: state.columnsData.data,
    selectedCardId: state.selectedCardId,
    cardEditing: state.cardEditing
});

const mapDispatchToProps = (dispatch) => ({
    onBackgroundChange: (background) => {
        dispatch(changeBackground(background));
    },
    openEditPopup: () => {
        dispatch(openEditPopup());
    },
    closeEditPopup: () => {
        dispatch(closeEditPopup());
    },
    onColumnAdd: (title) => {
        dispatch(columnAdd(title));
    },
    onCardAdd: (card) => {
        dispatch(cardAdd(card));
    },
    onCardUpdate: (card) => {
        dispatch(cardUpdate(card));
    },
    onCardDelete: (card) => {
        dispatch(cardDelete(card));
    },
    selectCard: (id) => {
        dispatch(cardSelect(id));
    },
    deselectCard: () => {
        dispatch(cardDeselect());
    },
    moveCardUp: (id) => {
        dispatch(moveCardUp(id));
    },
    moveCardDown: (id) => {
        dispatch(moveCardDown(id));
    },
    moveCardLeft: (id) => {
        dispatch(moveCardLeft(id));
    },
    moveCardRight: (id) => {
        dispatch(moveCardRight(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
