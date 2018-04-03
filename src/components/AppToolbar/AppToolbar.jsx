import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import RedoButton from './RedoButton';
import UndoButton from './UndoButton';
import AddListButton from './AddListButton';
import MenuSettings from './MenuSettings';
import './AppToolbar.css';

class AppToolbar extends React.Component {
    render() {
        return (
            <Toolbar className="app-toolbar">
                <ToolbarGroup firstChild={true} className="app-toolbar-actions">
                    <UndoButton />
                    <RedoButton />
                </ToolbarGroup>

                <ToolbarTitle className="app-toolbar-title" text="TODO Board" />

                <ToolbarGroup lastChild={false} className="app-toolbar-settings">
                    <AddListButton />
                    <MenuSettings />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default AppToolbar;
