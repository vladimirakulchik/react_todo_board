import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import RedoButton from "./RedoButton";
import UndoButton from "./UndoButton";
import AddColumnButton from "./AddColumnButton";
import MenuSettings from "./MenuSettings";
import "./AppToolbar.css";

function AppToolbar(props) {
    const {openMenu, onColumnAdd, onUndo, onRedo} = props;

    return (
        <Toolbar>
            <div className="app-toolbar-actions">
                <UndoButton onUndo={onUndo} />
                <RedoButton onRedo={onRedo} />
            </div>

            <Typography className="app-toolbar-title" variant="title">
                TODO Board
            </Typography>

            <div className="app-toolbar-settings">
                <AddColumnButton onColumnAdd={onColumnAdd} />
                <MenuSettings openMenu={openMenu} />
            </div>
        </Toolbar>
    );
}

export default AppToolbar;
