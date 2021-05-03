import React from "react";

function Wrapper(prop) {
    return (
        <div className="wrapper">{prop.children}</div>
    )
}


export default Wrapper;