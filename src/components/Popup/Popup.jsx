import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import './Popup.css';

class Popup extends React.Component {
    render() {
        const {title, isOpen, onSave, onCancel, children} = this.props;

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
            <div>
                <Dialog
                    title={title}
                    actions={actions}
                    modal={false}
                    open={isOpen}
                    onRequestClose={onCancel}
                >
                    {children}
                </Dialog>
            </div>
        )
    }
}

export default Popup;
