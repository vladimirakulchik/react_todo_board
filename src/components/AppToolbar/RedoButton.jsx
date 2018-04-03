import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import './Buttons.css';

function RedoButton() {
    return (
        <IconButton className="icon-btn">
            <ContentRedo className="icon" />
        </IconButton>
    );
}

export default RedoButton;
