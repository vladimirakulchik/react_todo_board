import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import './Popup.css';

class Popup extends React.Component {
    render() {
        const {popupStyle, title, isOpen, onSave, onCancel, children} = this.props;

        const actions = [
            <RaisedButton className="action-btn"
                label="Cancel"
                primary={true}
                onClick={onCancel}
            />,
            <RaisedButton className="action-btn"
                label="Save"
                primary={true}
                onClick={onSave}
            />
        ];

        return(
            <Dialog
                title={title}
                actions={actions}
                modal={false}
                open={isOpen}
                onRequestClose={onCancel}
                contentClassName={popupStyle}
            >
                {children}
            </Dialog>
        )
    }
}

export default Popup;
