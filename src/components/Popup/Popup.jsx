import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import "./Popup.css";

class Popup extends React.Component {
    getButtons() {
        const {isDelete, onSave, onCancel, onDelete} = this.props;

        let deleteButton = (isDelete)
            ? <Button
                variant="raised"
                className="action-btn-delete"
                label="Delete"
                primary={true}
                onClick={onDelete} />
            : null;

        return [
            deleteButton,
            <Button
                variant="raised"
                className="action-btn"
                label="Save"
                key="save"
                primary={true}
                onClick={onSave}
            />,
            <Button
                variant="raised"
                className="action-btn"
                label="Cancel"
                key="cancel"
                primary={true}
                onClick={onCancel}
            />
        ];
    }

    render() {
        const {popupStyle, title, isOpen, onCancel, children} = this.props;

        return(
            <Dialog
                title={title}
                actions={this.getButtons()}
                modal={false}
                open={isOpen}
                onRequestClose={onCancel}
                contentClassName={popupStyle}
                paperClassName="popup-paper"
            >
                {children}
            </Dialog>
        );
    }
}

export default Popup;
