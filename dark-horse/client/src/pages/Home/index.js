import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import SearchBar from "../../components/SearchBar";
import BandCard from "../../components/BandCard";
import CallingAllBands from "../../components/CallingAllBands";
import Footer from "../../components/Footer";
import BandInfo from "../../../src/utils/bands.json";
import "../../../src/styles/Home.css";




const Home = () => {
    const [dataSearch, setDataSearch] = useState({
        searchedBands: "",
        BandInfo
    });



    const handleSearchChange = event => {
        const { name, value } = event.target;
        setDataSearch({
            ...dataSearch,
            [name]: value
        })
    }


    // const handleKeyPress = (event) => {
    //     if(event.key === 'Enter') {

    //     }
    // }

    return (

        <Wrapper>
            <SearchBar handleInputChange={handleSearchChange} search={setDataSearch.searchedBands} />
           <h1>Check out these trending campaigns</h1>
            <BandCard />
            <CallingAllBands />
            <Footer />
        </Wrapper>

    )

}

export default Home;

