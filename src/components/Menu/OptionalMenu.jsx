import React from "react";
import Paper from "@material-ui/core/Paper";
import MenuHeader from "./MenuHeader";
import ImageGallery from "./ImageGallery";
import "./OptionalMenu.css";

function OptionalMenu(props) {
    const {closeMenu, onBackgroundChange} = props;

    return (
        <Paper className="optional-menu" zDepth={3}>
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

export default OptionalMenu;
