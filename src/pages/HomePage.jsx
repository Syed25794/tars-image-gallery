import { Box } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ImageCard from '../components/ImageCard';
import Macy  from 'macy';

const HomePage = () => {
  const [data,setData]=useState([]);
  const gridLayoutRef=useRef(null);
  const getRandomImages = useCallback(async()=>{
    try {
      const response = await fetch("https://api.unsplash.com/photos/random?count=40",{
        method:"GET",
        headers:{"Content-Type":"application/json","Authorization": "Client-ID mzY60xVRdj1ME16LWz1A-zexVmhh0UWBlDXq3edmVMY"},
      });
      const result = await response.json();
      setData(result);
      setTimeout(()=>{
        const macyInstance = Macy({
          container:gridLayoutRef.current,
          columns:3,
          margin:{
            x:10,
            y:10
          },
          breakAt:{
            900:{
              columns:2,
            },
            600:{
              columns:1
            }
          }
        });
      },1000)
    } catch (error) {
      console.log(error);
    }
  },[])
  useEffect(()=>{
    getRandomImages();
  },[getRandomImages])
  return (
    <Box m="20px" ref={gridLayoutRef}>
    { data.length > 0 && data.map((image,index)=>{
      return <ImageCard user={image.user} description={image.alt_description} urls={image.urls}  key={image.id} />
    })}
    </Box>
  )
}

export default HomePage