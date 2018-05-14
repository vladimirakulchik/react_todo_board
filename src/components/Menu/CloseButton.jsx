import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Clear";

function CloseButton(props) {
    return (
        <IconButton onClick={props.onClose}>
            <Close />
        </IconButton>
    );
}

export default CloseButton;
