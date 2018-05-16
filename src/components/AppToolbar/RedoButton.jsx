import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Redo from "@material-ui/icons/Redo";

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

function RedoButton(props) {
    const {classes} = props;

    return (
        <IconButton classes={{root: classes.iconBtn}} onClick={props.onRedo}>
            <Redo classes={{root: classes.icon}} />
        </IconButton>
    );
}

export default withStyles(styles)(RedoButton);
