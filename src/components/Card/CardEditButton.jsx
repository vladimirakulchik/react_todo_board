import React from 'react';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Popup from '../Popup/Popup';
import CardEdit from '../Card/CardEdit';
import './CardEditButton.css';

class CardEditButton extends React.Component {
    state = {
        title: this.props.title,
        text: this.props.text,
        color: this.props.color
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                title: nextProps.title,
                text: nextProps.text,
                color: nextProps.color
            });
        }
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

    onSave = () => {
        this.props.onCardUpdate({
            "title": this.state.title,
            "text": this.state.text,
            "color": this.state.color
        });
    };

    render() {
        const {isOpen, onCardEdit, onCardEditCancel, onCardDelete} = this.props;

        return(
            <div>
                <IconButton className="card-edit-btn" onClick={onCardEdit}>
                    <ModeEdit />
                </IconButton>

                <Popup
                    popupStyle="card-edit-popup"
                    title="Edit card"
                    isDelete={true}
                    isOpen={isOpen}
                    onSave={this.onSave}
                    onCancel={onCardEditCancel}
                    onDelete={onCardDelete}
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
