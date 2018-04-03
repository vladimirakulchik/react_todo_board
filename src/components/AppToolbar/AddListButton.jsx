import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Popup from '../Popup/Popup';
import './AddListButton.css';

class AddListButton extends React.Component {
    state = {
        open: false,
        textFieldValue: ""
    };

    togglePopup = () => {
        this.setState({
            open: !this.state.open
        });
    };

    onSave = () => {
        this.togglePopup();
    };

    handleTextFieldChange = (e) => {
        let title = e.target.value;

        if (title.length <= 20) {
            this.setState({
                textFieldValue: e.target.value
            });
        } else {
            e.target.value = this.state.textFieldValue;
        }
    };

    render() {
        return(
            <div>
                <FlatButton className="add-list-btn" onClick={this.togglePopup}>
                    Add a list
                </FlatButton>

                <Popup
                    popupStyle="add-list-popup"
                    title="Add a list"
                    isOpen={this.state.open}
                    onSave={this.onSave}
                    onCancel={this.togglePopup}
                >
                    <TextField
                        className="add-list-tf"
                        onChange={this.handleTextFieldChange}
                        floatingLabelText="List title"
                        floatingLabelStyle={{color: "green"}}
                        floatingLabelFocusStyle={{color: "gray"}}
                        underlineStyle={{borderColor: "green"}}
                    />
                </Popup>
            </div>
        )
    }
}

export default AddListButton;
