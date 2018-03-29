import React from 'react';
import './WrapperHeader.css';

function WrapperHeader(props) {
    return(
        <h3 className="wrapper-header">
            {props.title}
        </h3>
    )
}

export default WrapperHeader;
