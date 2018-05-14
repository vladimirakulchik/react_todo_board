import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Undo from "@material-ui/icons/Undo";
import "./Buttons.css";

function UndoButton(props) {
    return (
        <IconButton className="icon-btn" onClick={props.onUndo}>
            <Undo className="icon" />
        </IconButton>
    );
}

export default UndoButton;
