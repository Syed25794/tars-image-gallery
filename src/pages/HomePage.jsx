import { Box } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';

const HomePage = ({data,gridLayoutRef,imageFlag}) => {
  return (
    <Box>
      <Box  ref={gridLayoutRef} marginTop={imageFlag ? "8rem" : "2rem"}>
        {data.length > 0 && data.map((image)=>{
          return <ImageCard user={image.user} description={image.alt_description} urls={image.urls}  key={image.id} />
        })}
      </Box>
    </Box>
  )
}

export default HomePage