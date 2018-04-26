import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import './Buttons.css';

function RedoButton(props) {
    return (
        <IconButton className="icon-btn" onClick={props.onRedo}>
            <ContentRedo className="icon" />
        </IconButton>
    );
}

export default RedoButton;
