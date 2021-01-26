import React from "react";

const header = (props) => {
    const headerStyle = {
        border: 'solid',
        borderColor: 'blue',
        borderWidth: 5
    }

    const headerTextStyle = {
        color: 'blue',
        padding: '1%'
    }

    return (
        <div style={headerStyle}>
            <h2 style={headerTextStyle}>{props.children}</h2>
        </div>
    )
}

export default header;
