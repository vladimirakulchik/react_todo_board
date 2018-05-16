import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import RedoButton from "./RedoButton";
import UndoButton from "./UndoButton";
import AddColumnButton from "./AddColumnButton";
import MenuSettings from "./MenuSettings";

const styles = {
    toolbar: {
        backgroundColor: "transparent",
        height: "100%",
        minHeight: "100%",
        padding: 0
    },
    title: {
        color: "#ECEFF1",
        fontSize: "24px",
        lineHeight: "40px",
        margin: "0 auto"
    }
};

function AppToolbar(props) {
    const {classes, openMenu, onColumnAdd, onUndo, onRedo} = props;

    return (
        <Toolbar classes={{root: classes.toolbar}}>
            <UndoButton onUndo={onUndo} />
            <RedoButton onRedo={onRedo} />

            <Typography classes={{root: classes.title}} variant="title">
                TODO Board
            </Typography>

            <AddColumnButton onColumnAdd={onColumnAdd} />
            <MenuSettings openMenu={openMenu} />
        </Toolbar>
    );
}

export default withStyles(styles)(AppToolbar);
