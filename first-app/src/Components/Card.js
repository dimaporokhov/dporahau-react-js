import React from "react";

const card = (props) => {
    const cardStyle = {
        border: 'solid',
        borderColor: 'green',
        borderWidth: 5,
        marginLeft: '2%',
        marginTop: '4%',
        width: '30%'
    }

    const contentStyle = {
        color: 'green',
        textAlign: 'left',
        padding: '3%',
        wordBreak: 'break-all'
    }

    const lineStyle = {
        margin: '5%',
    }

    return (
        <div style={cardStyle}>
            <h2 style={contentStyle}>{props.caption}</h2>
            <hr style={lineStyle}/>
            <p style={contentStyle}>{props.children}</p>
        </div>
    )
}

export default card;
