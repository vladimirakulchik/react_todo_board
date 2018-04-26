import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentUndo from 'material-ui/svg-icons/content/undo';
import './Buttons.css';

function UndoButton(props) {
    return (
        <IconButton className="icon-btn" onClick={props.onUndo}>
            <ContentUndo className="icon" />
        </IconButton>
    );
}

export default UndoButton;
