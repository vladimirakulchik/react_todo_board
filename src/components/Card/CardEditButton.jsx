import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ModeEdit from "@material-ui/icons/ModeEdit";
import Popup from "../Popup/Popup";
import CardEdit from "../Card/CardEdit";

const styles = {
    cardEditBtn: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        opacity: 0.8,
        width: "30px",
        height: "30px",
        borderRadius: "3px",
        padding: "4px",
        margin: "8px",
        zIndex: 100,
        position: "absolute",
        top: "8px",
        right: "4px",
        display: "none"
    },
    cardEditPopup: {
        width: "30%",
        maxWidth: "none"
    }
};

class CardEditButton extends React.Component {
    state = {
        title: this.props.title,
        text: this.props.text,
        color: this.props.color
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if ((nextProps.title === prevState.title) &&
            (nextProps.text === prevState.text) &&
            (nextProps.color === prevState.color)) {
            return null;
        }

        return {
            title: nextProps.title,
            text: nextProps.text,
            color: nextProps.color
        };
    }

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

    onSave = () => {
        this.props.onCardUpdate({
            "title": this.state.title,
            "text": this.state.text,
            "color": this.state.color
        });
    };

    render() {
        const {classes, isOpen, onCardEdit, onCardEditCancel, onCardDelete} = this.props;

        return(
            <React.Fragment>
                <IconButton classes={{root: classes.cardEditBtn}}
                    className="card-edit-btn"
                    onClick={onCardEdit}
                >
                    <ModeEdit />
                </IconButton>

                <Popup
                    title="Edit card"
                    isOpen={isOpen}
                    isDelete={true}
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
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(CardEditButton);
