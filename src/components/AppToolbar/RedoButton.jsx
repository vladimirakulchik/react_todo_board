import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Redo from "@material-ui/icons/Redo";
import "./Buttons.css";

function RedoButton(props) {
    return (
        <IconButton className="icon-btn" onClick={props.onRedo}>
            <Redo className="icon" />
        </IconButton>
    );
}

export default RedoButton;
