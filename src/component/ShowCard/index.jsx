import React from "react";

const showCard = ({data}) => {

    return <div className="show-card">
    <form>
        <input type="text" />
        <input type="submit" />
    </form>

    <h2>{data.name}</h2>
</div>

}

export default showCard;