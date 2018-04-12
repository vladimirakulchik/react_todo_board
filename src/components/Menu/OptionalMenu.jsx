import React from 'react';
import Paper from 'material-ui/Paper';
import MenuHeader from './MenuHeader';
import ImageGallery from './ImageGallery';
import './OptionalMenu.css';

class OptionalMenu extends React.Component {
    closeMenu = () => {
        document.getElementsByClassName("menu")[0].style.display = "none";
        document.getElementsByClassName("board")[0].style.marginRight = 0;
    };

    render() {
        return (
            <Paper className="optional-menu" zDepth={3}>
                <MenuHeader
                    title="Background image"
                    onClose={this.closeMenu}
                />

                <ImageGallery
                    onChange={this.props.onChange}
                />
            </Paper>
        );
    }
}

export default OptionalMenu;
