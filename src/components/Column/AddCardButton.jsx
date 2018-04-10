import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popup from '../Popup/Popup';
import CardEdit from '../Card/CardEdit';
import './AddCardButton.css';

class AddCardButton extends React.Component {
    state = {
        open: false,
        title: "",
        text: "",
        color: "white"
    };

    togglePopup = () => {
        this.setState({
            open: !this.state.open,
            title: "",
            text: "",
            color: "white"
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

    handleTitleChange = (e, value) => {
        this.setState({
            title: value
        });
    };

    handleTextChange = (e, value) => {
        this.setState({
            text: value
        });
    };

    handleColorChange = (e, value) => {
        this.setState({
            color: value
        });
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
                    <CardEdit
                        title={this.state.title}
                        text={this.state.text}
                        color={this.state.color}
                        onTitleChange={this.handleTitleChange}
                        onTextChange={this.handleTextChange}
                        onColorChange={this.handleColorChange}
                    />
                </Popup>
            </div>
        )
    }
}

export default AddCardButton;
