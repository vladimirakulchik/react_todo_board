import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import './Buttons.css';

class MenuSettings extends React.Component {
    showMenu = () => {
        document.getElementsByClassName("menu")[0].style.display = "block";
        let menuWidth = document.getElementsByClassName("menu")[0].offsetWidth;
        document.getElementsByClassName("board")[0].style.marginRight = menuWidth + "px";
    };

    render() {
        return (
            <IconMenu
                iconButtonElement= {
                    <IconButton className="icon-btn">
                        <ActionSettings className="icon" />
                    </IconButton>
                }
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem
                    primaryText="Change background"
                    onClick={this.showMenu}
                />
            </IconMenu>
        );
    }
}

export default MenuSettings;
