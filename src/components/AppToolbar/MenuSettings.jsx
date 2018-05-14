import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Settings from "@material-ui/icons/Settings";
import "./Buttons.css";

function MenuSettings(props) {
    const {openMenu} = props;

    return (
        <React.Fragment>
            <IconButton className="icon-btn">
                <Settings className="icon" />
            </IconButton>

            <Menu>
                <MenuItem
                    primaryText="Change background"
                    onClick={openMenu}
                />
            </Menu>
        </React.Fragment>
    );
}

export default MenuSettings;
