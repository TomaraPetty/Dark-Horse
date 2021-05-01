import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import Wrapper from '../../components/Wrapper';
import CallingAllBands from '../../components/CallingAllBands';
import BandCard from '../../components/BandCard';
import BandInfo from '../../Utils/bands.json';
import '../../../src/styles/Home.css';

const Home = () => {
  const [dataSearch, setDataSearch] = useState({
    searchedBands: '',
    BandInfo,
  });

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setDataSearch({
      ...dataSearch,
      [name]: value,
    });
  };

  // const handleKeyPress = (event) => {
  //     if(event.key === 'Enter') {

  //     }
  // }

  return (
    <Wrapper>
      <SearchBar
        handleInputChange={handleSearchChange}
        search={setDataSearch.searchedBands}
      />
      <h1>Check out these trending campaigns</h1>
      <BandCard />
      <CallingAllBands />
    </Wrapper>
  );
};

export default Home;
