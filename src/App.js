import { Box } from '@chakra-ui/react';
import HeroComponent from './components/HeroComponent';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Macy from 'macy';

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [hideHeroSection,setHideHeroSection]=useState(false);
  const [data,setData]=useState([]);
  const gridLayoutRef=useRef(null);

  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  const getSearchPhotos = async (searchQuery) => {
    if( searchQuery.length > 0 ){
      setHideHeroSection(true);
      try {
        let response = await fetch(
          `https://api.unsplash.com/search/collections?query=${searchQuery}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Client-ID mzY60xVRdj1ME16LWz1A-zexVmhh0UWBlDXq3edmVMY"
            }
          }
        );
        let result = await response.json();
        const data = result.results;
        const autoCompleteData = data.map((image) => image.title);
        setOptions(autoCompleteData);
        setData(data);
        console.log(autoCompleteData);
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  const debouncedHandleSearchQuery =useCallback(debounce((searchQuery) => getSearchPhotos(searchQuery), 500),[]);
  
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
    debouncedHandleSearchQuery(e.target.value);
  };

  const handleKeyDown=(e)=>{
    console.log(e.code,e.target.value);
    if( e.code === "Enter" ){
      debouncedHandleSearchQuery(e.target.value);
      setSearchQuery("");
    }else if( e.code === 'Backspace' && e.target.value.length === 1 ){
      setHideHeroSection(false);
      getRandomImages();
    }
  }



  const getRandomImages = useCallback(async()=>{
    try {
      const response = await fetch("https://api.unsplash.com/photos/random?count=40",{
        method:"GET",
        headers:{"Content-Type":"application/json","Authorization": "Client-ID mzY60xVRdj1ME16LWz1A-zexVmhh0UWBlDXq3edmVMY"},
      });
      const result = await response.json();
      setData(result);
      setTimeout(()=>{
        Macy({
          container:gridLayoutRef.current,
          columns:3,
          margin:{x:30,y:30},
          breakAt:{900:{columns:2},600:{columns:1}}
        });
        
      },1000)
    } catch (error) {
      console.log(error);
    }
  },[]);

  useEffect(()=>{
    getRandomImages();
  },[getRandomImages])

  return (
    <Box>
      <Navbar searchQuery={searchQuery} handleKeyDown={handleKeyDown} handleSearchQuery={handleSearchQuery} options={options} />
      { !hideHeroSection && <HeroComponent />}
      <HomePage handleSearchQuery={handleSearchQuery} data={data} gridLayoutRef={gridLayoutRef} />
    </Box>
  );
}

export default App;


