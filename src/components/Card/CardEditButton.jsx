import React from 'react';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Popup from '../Popup/Popup';
import CardEdit from '../Card/CardEdit';
import './CardEditButton.css';

class CardEditButton extends React.Component {
    state = {
        open: false,
        title: this.props.title,
        text: this.props.text,
        color: this.props.color
    };

    togglePopup = () => {
        this.setState({
            open: !this.state.open
        });
    };

    onSave = () => {
        this.togglePopup();
        this.props.onCardUpdate({
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
            <div>
                <IconButton className="card-edit-btn" onClick={this.togglePopup}>
                    <ModeEdit />
                </IconButton>

                <Popup
                    popupStyle="card-edit-popup"
                    title="Edit card"
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

export default CardEditButton;
