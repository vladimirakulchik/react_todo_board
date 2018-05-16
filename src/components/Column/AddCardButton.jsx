import React from "react";
import Button from "@material-ui/core/Button";
import Popup from "../Popup/Popup";
import CardEdit from "../Card/CardEdit";

class AddCardButton extends React.Component {
    state = {
        open: false,
        title: "",
        text: "",
        color: "#FFFFFF"
    };

    togglePopup = () => {
        this.setState({
            open: !this.state.open,
            title: "",
            text: "",
            color: "#FFFFFF"
        });
    };

    onSave = () => {
        this.togglePopup();
        this.props.onCardAdd({
            "title": this.state.title,
            "text": this.state.text,
            "color": this.state.color
        });
    };

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    handleColorChange = (e, value) => {
        this.setState({
            color: value
        });
    };

    render() {
        return(
            <React.Fragment>
                <Button onClick={this.togglePopup} tabIndex={-1}>
                    Add a card
                </Button>

                <Popup
                    title="Add a card"
                    isOpen={this.state.open}
                    isDelete={false}
                    onSave={this.onSave}
                    onCancel={this.togglePopup}
                >
                    <CardEdit
                        title={this.state.title}
                        text={this.state.text}
                        color={this.state.color}
                        onTitleChange={this.handleTitleChange}
                        onTextChange={this.handleTextChange}
                        onColorChange={this.handleColorChange}
                    />
                </Popup>
            </React.Fragment>
        );
    }
}

export default AddCardButton;
