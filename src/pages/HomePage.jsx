import { Box } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';

const HomePage = ({handleSearchQuery,data,gridLayoutRef}) => {
  return (
    <Box>
      <Box m="1rem 2rem" ref={gridLayoutRef}>
        {data.length > 0 && data.map((image,index)=>{
          return <ImageCard user={image.user} description={image.alt_description} urls={image.urls}  key={image.id} />
        })}
      </Box>
    </Box>
  )
}

export default HomePage