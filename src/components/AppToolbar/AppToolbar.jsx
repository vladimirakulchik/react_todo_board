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
                <ToolbarGroup firstChild={true}>
                    <IconButton className="app-toolbar-icon-button">
                        <ContentUndo className="app-toolbar-icon" />
                    </IconButton>
                    <IconButton className="app-toolbar-icon-button">
                        <ContentRedo className="app-toolbar-icon" />
                    </IconButton>
                </ToolbarGroup>

                <ToolbarTitle text="TODO Board" className="app-toolbar-title" />

                <ToolbarGroup lastChild={false}>
                    <FlatButton label="Add a list" className="app-toolbar-button" />
                    <IconMenu
                        iconButtonElement={
                            <IconButton className="app-toolbar-icon-button">
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
