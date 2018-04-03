import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popup from '../Popup/Popup';
import './AddCardButton.css';

class AddCardButton extends React.Component {
    state = {
        open: false,
    };

    togglePopup = () => {
        this.setState({
            open: !this.state.open
        });
    };

    onSave = () => {
        this.togglePopup();
    };

    render() {
        return(
            <div className="add-card">
                <FlatButton className="add-card-btn" onClick={this.togglePopup}>
                    Add a card
                </FlatButton>

                <Popup
                    popupStyle="add-card-popup"
                    title="Add a card"
                    isOpen={this.state.open}
                    onSave={this.onSave}
                    onCancel={this.togglePopup}
                >
                    CardEdit with empty fields
                </Popup>
            </div>
        )
    }
}

export default AddCardButton;
