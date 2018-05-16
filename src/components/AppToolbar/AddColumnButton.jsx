import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Popup from "../Popup/Popup";

const styles = {
    addListBtn: {
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        height: "40px",
        margin: "0 16px",
        padding: "0 20px",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)"
        }
    }
};

class AddColumnButton extends React.Component {
    state = {
        open: false,
        title: ""
    };

    togglePopup = () => {
        this.setState({
            open: !this.state.open,
            title: ""
        });
    };

    onSave = () => {
        this.togglePopup();
        this.props.onColumnAdd(this.state.title);
    };

    handleTitleChange = (event) => {
        let value = event.target.value;

        if (value.length <= 20) {
            this.setState({
                title: value
            });
        } else {
            event.target.value = this.state.title;
        }
    };

    render() {
        const {classes} = this.props;

        return(
            <React.Fragment>
                <Button classes={{root: classes.addListBtn}} onClick={this.togglePopup}>
                    Add a list
                </Button>

                <Popup
                    title="Add a list"
                    isOpen={this.state.open}
                    isDelete={false}
                    onSave={this.onSave}
                    onCancel={this.togglePopup}
                >
                    <TextField
                        id="listTitle"
                        label="List title"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        margin="normal"
                        autoFocus
                        fullWidth
                    />
                </Popup>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AddColumnButton);
