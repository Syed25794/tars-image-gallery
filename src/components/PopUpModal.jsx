import { Box, Button, ModalBody ,ModalCloseButton,Text, Modal, ModalOverlay, ModalContent,Icon, Heading, Image } from '@chakra-ui/react'
import { BiLike } from 'react-icons/bi'
import { BsInfoCircle, BsShare } from 'react-icons/bs'
import { TfiInstagram, TfiTwitter } from 'react-icons/tfi'

const PopUpModal = ({isOpen,onClose,imageData,tags}) => {
  return (
    <Box zIndex="10">
        <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered closeOnOverlayClick={false} >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton bgColor="white" />
                <ModalBody>
                    <Box display="flex" alignItems="flex-end" justifyContent="space-between" bgImage={`url(${imageData.urls.regular})`} m="-0.5rem -1.5rem 0rem -1.5rem" h="25rem" bgSize="cover" bgPosition="center" bgRepeat="no-repeat" borderRadius="0.3rem 0.3rem 0rem 0rem">
                        <Box m="0rem 0rem 0.5rem 0.5rem" color="white">
                            <Button _hover={{color:"black"}}  variant="outline" opacity={0.8}><Icon as={BsShare} marginRight="8px" marginTop="3px" />Share</Button>
                            <Button _hover={{color:"black"}} marginLeft="5px" variant="outline" opacity={0.8}><Icon as={BsInfoCircle} marginRight="8px" marginTop="3px" />Info</Button>
                        </Box>
                        <Box m="0rem 0.5rem 0.2rem 0rem"><Button variant="solid" colorScheme="blue">Download Image</Button></Box>
                    </Box> 
                </ModalBody>
                <Box display="flex" flexDirection="column" m="0rem 0.5rem 0.5rem 0.5rem">
                    <Box display="flex" justifyContent="space-between">
                        <Box margin={["0rem 0.1rem 0rem 0.1rem","0.2rem","0rem 0.5rem 0rem 0.5rem"]} display="flex">
                            <Image  w={["35px","50px","70px"]} h={["35px","50px","70px"]} borderRadius="50%" src={imageData.user.profile_image.medium} alt={imageData.user.description} />
                            <Box>
                                <Text m={["10px 0px 0px 5px","15px 0px 0px 10px"]} fontSize={["0.4rem","0.9rem","1rem"]} fontWeight="700" fontFamily="Montserrat">{imageData.user.first_name}</Text>
                                <Text color="gray" m="0px 0px 0px 10px" fontSize={["0.3rem","0.8rem","0.9rem"]} fontStyle="italic" fontFamily="Poppins">{imageData.user.username}</Text>
                            </Box>
                            <Box m={["10px 0px 0px 5px","25px 0px 0px 15px"]} display="flex">
                                <Icon as={TfiInstagram} marginTop="5px" /><Text marginLeft="3px" color="gray">/{imageData.user.instagram_username}</Text>
                                <Icon as={TfiTwitter} marginTop="5px" marginLeft="15px" /><Text color="gray">/{imageData.user.twitter_username}</Text>
                            </Box>
                        </Box>
                        <Box fontWeight="bold" display="flex" marginRight={["0.5rem","1rem","1rem"]} marginTop={["0.8rem","1rem","1.3rem"]}>
                            <Text marginRight="0.5rem">{`${imageData.downloads} Downloads`}</Text>
                            <Box w={["0.5rem","1rem","1.4rem"]} marginTop="0.2rem" fontSize={["15px","2xl","xl"]}><BiLike /></Box>
                            <Text marginTop={["0rem","0rem","0.1rem"]} fontSize={["10px","md","md"]}>{imageData.user.total_likes}</Text>
                        </Box> 
                    </Box>
                    <Box m="0.5rem" marginTop="5px" marginBottom="5px" fontFamily="Poppins">
                        <Heading size="sm" fontWeight={600}>Related Tags</Heading>
                    </Box>
                    <Box m="0.5rem" display="flex" flexWrap="wrap" gap="0.5rem">
                        {tags.map((tag,index)=>{
                           return <Box p="5px 10px" w="fit-content" fontSize="14px" bgColor="#ececec" key={index}>{tag}</Box>
                        })}
                    </Box>
                </Box>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default PopUpModal