import React, { useState, useEffect } from "react";
import axios from "axios";

import ShowCard from "./component/ShowCard";
import SearchForm from "./component/SearchForm"

import "./app.css"


const App = () => {
    


    const [showData, setShowData] = useState([])

    useEffect(() => {
        async function searchAPI() {

            const result = await axios.get("https://api.tvmaze.com/search/shows?q=girls")
            setShowData(result.data);
        }

        searchAPI();
    }, [])
    
    

    return <>

        <SearchForm/>
        {showData.map((s) => <ShowCard key= {s.show.id} data={s.show}/>)}


    </>
}

export default App;