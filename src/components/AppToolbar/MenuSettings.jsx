import React from "react";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import ActionSettings from "material-ui/svg-icons/action/settings";
import "./Buttons.css";

function MenuSettings(props) {
    const {openMenu} = props;

    return (
        <IconMenu
            iconButtonElement= {
                <IconButton className="icon-btn">
                    <ActionSettings className="icon" />
                </IconButton>
            }
            anchorOrigin={{horizontal: "right", vertical: "top"}}
            targetOrigin={{horizontal: "right", vertical: "top"}}
        >

            <MenuItem
                primaryText="Change background"
                onClick={openMenu}
            />
        </IconMenu>
    );
}

export default MenuSettings;
