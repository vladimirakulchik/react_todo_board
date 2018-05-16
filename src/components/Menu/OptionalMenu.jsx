import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuHeader from "./MenuHeader";
import ImageGallery from "./ImageGallery";

const styles = {
    optionalMenu: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        whiteSpace: "normal"
    }
};

function OptionalMenu(props) {
    const {classes, closeMenu, onBackgroundChange} = props;

    return (
        <Paper classes={{root: classes.optionalMenu}} elevation={5}>
            <MenuHeader
                title="Background image"
                onClose={closeMenu}
            />

            <ImageGallery
                onChange={onBackgroundChange}
            />
        </Paper>
    );
}

export default withStyles(styles)(OptionalMenu);
