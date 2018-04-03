import React from 'react';
import './Header.css';

function Header(props) {
    return(
        <h3 className="column-header">
            {props.title}
        </h3>
    )
}

export default Header;
