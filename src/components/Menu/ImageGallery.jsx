import React from 'react';
import { BACKGROUND_DATA } from '../../constants/BackgroundData';
import './ImageGallery.css';
import '../Scrollbar.css';

class ImageGallery extends React.Component {
    render() {
        return (
            <div className="image-gallery scrollbar">
                {BACKGROUND_DATA.map(background =>
                    <div className="background-section" key={background.id}>
                        <div
                            className="image"
                            style={{
                                backgroundColor: background.color,
                                backgroundImage: background.photo
                            }}
                            onClick={this.props.onChange.bind(this, background)}
                        >
                        </div>
                    </div>
                )}
            </div>
        );
    };
}

export default ImageGallery;
