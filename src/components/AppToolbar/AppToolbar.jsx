import React from "react";
import {Toolbar, ToolbarGroup, ToolbarTitle} from "material-ui/Toolbar";
import RedoButton from "./RedoButton";
import UndoButton from "./UndoButton";
import AddColumnButton from "./AddColumnButton";
import MenuSettings from "./MenuSettings";
import "./AppToolbar.css";

function AppToolbar(props) {
    const {openMenu, onColumnAdd, onUndo, onRedo} = props;

    return (
        <Toolbar className="app-toolbar">
            <ToolbarGroup firstChild={true} className="app-toolbar-actions">
                <UndoButton onUndo={onUndo} />
                <RedoButton onRedo={onRedo} />
            </ToolbarGroup>

            <ToolbarTitle className="app-toolbar-title" text="TODO Board" />

            <ToolbarGroup lastChild={false} className="app-toolbar-settings">
                <AddColumnButton onColumnAdd={onColumnAdd} />
                <MenuSettings openMenu={openMenu} />
            </ToolbarGroup>
        </Toolbar>
    );
}

export default AppToolbar;
