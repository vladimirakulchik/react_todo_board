import { connect } from 'react-redux'
import { changeBackground } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => ({
    background: state.background,
    columnsData: state.columnsData
});

const mapDispatchToProps = (dispatch) => ({
    onBackgroundChange: (background) => {
        dispatch(changeBackground(background));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
