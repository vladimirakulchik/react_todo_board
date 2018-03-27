import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ContentUndo from 'material-ui/svg-icons/content/undo';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import './AppToolbar.css';

class AppToolbar extends React.Component {
    render() {
        return (
            <Toolbar className="app-toolbar">
                <ToolbarGroup firstChild={true} className="app-toolbar-undo">
                    <IconButton className="app-toolbar-icon-btn">
                        <ContentUndo className="app-toolbar-icon" />
                    </IconButton>
                    <IconButton className="app-toolbar-icon-btn">
                        <ContentRedo className="app-toolbar-icon" />
                    </IconButton>
                </ToolbarGroup>

                <ToolbarTitle className="app-toolbar-title" text="TODO Board" />

                <ToolbarGroup lastChild={false} className="app-toolbar-settings">
                    <FlatButton label="Add a list" className="app-toolbar-add-btn" />

                    <IconMenu
                        iconButtonElement={
                            <IconButton className="app-toolbar-icon-btn">
                                <ActionSettings className="app-toolbar-icon" />
                            </IconButton>
                        }
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem primaryText="Change background" />
                        <MenuItem primaryText="Something else" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default AppToolbar;
