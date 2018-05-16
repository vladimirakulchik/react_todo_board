import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Settings from "@material-ui/icons/Settings";

const styles = {
    iconBtn: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        width: "40px",
        height: "40px",
        marginRight: "8px",
        padding: "8px",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)"
        }
    },
    icon: {
        color: "white"
    }
};

class MenuSettings extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    openMenu = () => {
        this.handleClose();
        this.props.openMenu();
    };

    render() {
        const {anchorEl} = this.state;
        const {classes} = this.props;

        return (
            <React.Fragment>
                <IconButton
                    classes={{root: classes.iconBtn}}
                    aria-owns={anchorEl ? "simple-menu" : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <Settings classes={{root: classes.icon}} />
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.openMenu}>Change background</MenuItem>
                </Menu>
            </React.Fragment>
        );
    }

}

export default withStyles(styles)(MenuSettings);
