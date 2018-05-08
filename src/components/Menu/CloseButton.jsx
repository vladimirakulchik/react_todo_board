import React from "react";
import IconButton from "material-ui/IconButton";
import Close from "material-ui/svg-icons/content/clear";

function CloseButton(props) {
    return (
        <IconButton onClick={props.onClose}>
            <Close />
        </IconButton>
    );
}

export default CloseButton;
