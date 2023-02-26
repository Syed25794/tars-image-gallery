import { Box } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';

const HomePage = ({data,gridLayoutRef,imageFlag}) => {
  return (
    <Box>
      <Box m={["0.2rem","0.4rem","1rem 2rem"]} ref={gridLayoutRef} marginTop={imageFlag ? "8rem" : "2rem"}>
        {data.length > 0 && data.map((image)=>{
          return <ImageCard user={image.user} description={image.alt_description} urls={image.urls}  key={image.id} />
        })}
      </Box>
    </Box>
  )
}

export default HomePage