import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Popup from "../Popup/Popup";
import "./AddColumnButton.css";

class AddColumnButton extends React.Component {
    state = {
        open: false,
        title: ""
    };

    togglePopup = () => {
        this.setState({
            open: !this.state.open
        });
    };

    onSave = () => {
        this.togglePopup();
        this.props.onColumnAdd(this.state.title);
    };

    handleTitleChange = (e, value) => {
        if (value.length <= 20) {
            this.setState({
                title: value
            });
        } else {
            e.target.value = this.state.title;
        }
    };

    render() {
        return(
            <React.Fragment>
                <Button className="add-list-btn" onClick={this.togglePopup}>
                    Add a list
                </Button>

                <Popup
                    popupStyle="add-list-popup"
                    title="Add a list"
                    isOpen={this.state.open}
                    onSave={this.onSave}
                    onCancel={this.togglePopup}
                >
                    <TextField
                        className="add-list-title"
                        onChange={this.handleTitleChange}
                        floatingLabelText="List title"
                        floatingLabelStyle={{color: "green"}}
                        floatingLabelFocusStyle={{color: "gray"}}
                        underlineStyle={{borderColor: "green"}}
                    />
                </Popup>
            </React.Fragment>
        );
    }
}

export default AddColumnButton;
