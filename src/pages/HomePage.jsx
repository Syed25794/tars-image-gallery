import { Box } from '@chakra-ui/react';
import ImageCard from '../components/ImageCard';

const HomePage = ({data,gridLayoutRef,imageFlag}) => {
  return (
    <Box>
      <Box  ref={gridLayoutRef} marginTop={imageFlag ? "8rem" : "2rem"}>
        {data.length > 0 && data.map((image)=>{
          console.log(image);
          return <ImageCard imageData={image}  key={image.id} />
        })}
      </Box>
    </Box>
  )
}

export default HomePage