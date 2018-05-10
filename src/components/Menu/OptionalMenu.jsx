import React from "react";
import Paper from "material-ui/Paper";
import MenuHeader from "./MenuHeader";
import ImageGallery from "./ImageGallery";
import "./OptionalMenu.css";

class OptionalMenu extends React.Component {
    render() {
        const {closeMenu, onBackgroundChange} = this.props;

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
}

export default OptionalMenu;
