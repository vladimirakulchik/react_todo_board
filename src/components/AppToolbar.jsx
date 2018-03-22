import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from "material-ui/FlatButton";
import ContentUndo from 'material-ui/svg-icons/content/undo';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class AppToolbar extends React.Component {
    render() {
        return (
            <Toolbar style={{backgroundColor: "#4CAF50"}}>
                <ToolbarGroup firstChild={true}>
                    <FlatButton
                        backgroundColor={"#81C784"}
                        hoverColor={"#8BC34A"}
                        icon={<ContentUndo color="white" />}
                        style={{margin: 5}}
                    />
                    <FlatButton
                        backgroundColor={"#81C784"}
                        hoverColor={"#8BC34A"}
                        icon={<ContentRedo color="white" />}
                        style={{margin: 5}}
                    />
                </ToolbarGroup>

                <ToolbarTitle text="TODO Board" style={{color: "#ECEFF1"}} />

                <ToolbarGroup lastChild={false}>
                    <FlatButton
                        backgroundColor={"#81C784"}
                        hoverColor={"#8BC34A"}
                        label="Add list"
                        style={{color: "white", margin: 20}}
                    />
                    <IconMenu
                        iconButtonElement={
                            <IconButton>
                                <ActionSettings color="white" />
                            </IconButton>}
                        iconStyle={{hoverColor: "#8BC34A"}}
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