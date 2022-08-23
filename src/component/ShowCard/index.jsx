import React from "react";

const showCard = ({ data }) => {

    return <div className="show-card">
        <img src={data["image"] ? data["image"]["medium"] : ""} />
        <h2>{data.name}</h2>
        <p>{data.summary}</p>
    </div>

}

export default showCard;