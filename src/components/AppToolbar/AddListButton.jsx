import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popup from '../Popup/Popup';
import './AddListButton.css';

class AddListButton extends React.Component {
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
            <div>
                <FlatButton className="add-list-btn" onClick={this.togglePopup}>
                    Add a list
                </FlatButton>

                <Popup
                    title="Add a list"
                    isOpen={this.state.open}
                    onSave={this.onSave}
                    onCancel={this.togglePopup}
                >
                    Popup text.
                </Popup>
            </div>
        )
    }
}

export default AddListButton;
