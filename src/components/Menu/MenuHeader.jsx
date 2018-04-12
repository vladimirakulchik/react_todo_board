import React from 'react';
import Divider from 'material-ui/Divider';
import CloseButton from './CloseButton';
import './MenuHeader.css';

function MenuHeader(props) {
    return(
        <div className="menu-header">
            <div className="menu-header-content">
                <h3 className="menu-header-title">
                    {props.title}
                </h3>

                <CloseButton
                    className="menu-close"
                    onClose={props.onClose}
                />
            </div>

            <Divider />
        </div>
    );
}

export default MenuHeader;
