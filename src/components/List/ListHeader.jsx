import React from 'react';
import './ListHeader.css';

function ListHeader(props) {
    return(
        <h3 className="list-header">
            {props.title}
        </h3>
    )
}

export default ListHeader;
