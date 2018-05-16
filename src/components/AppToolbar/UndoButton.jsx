import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Undo from "@material-ui/icons/Undo";

const styles = {
    iconBtn: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        width: "40px",
        height: "40px",
        marginRight: "8px",
        padding: "8px",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)"
        }
    },
    icon: {
        color: "white"
    }
};

function UndoButton(props) {
    const {classes} = props;

    return (
        <IconButton classes={{root: classes.iconBtn}} onClick={props.onUndo}>
            <Undo classes={{root: classes.icon}} />
        </IconButton>
    );
}

export default withStyles(styles)(UndoButton);
