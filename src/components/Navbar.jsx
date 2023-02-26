import { Input,InputGroup,InputLeftElement,Link,Box ,IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from "react";

const Navbar = ({searchQuery,handleSearchQuery,options,handleKeyDown}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);


  return (
    <Box top="0" left="0px"  width="full" bgColor="#ffc0c9" display="flex" gap="4rem" h={["4rem","5rem","6rem"]} alignItems="center" position="fixed" justifyContent="space-between" zIndex="5">
      <Box  fontFamily="pattaya" fontWeight={["200","300","400"]} fontSize={["15px","20px","30px"]} w={["6rem","8rem","11rem"]}>
        <Link textDecor="none">Image Gallery</Link>
      </Box>
      <Box   w={["10rem","20rem","25rem"]} display={["none","block","block"]}>
        <InputGroup w="full" border="1px solid black" borderRadius="0.5rem">
          <InputLeftElement  children={<IoSearchOutline color="gray.300" />}/>
          <Input onKeyDown={handleKeyDown} type="text" list="options" value={searchQuery} onChange={handleSearchQuery} placeholder="Search Images here" />
        </InputGroup>
        <datalist id="options">
          {options.map((option, index) => (
            <option key={index} value={option}  />
          ))}
        </datalist>
      </Box>
      <Box  w={["10%","20%","30%"]} fontWeight={["600","600","700"]} fontSize={["12px","14px","16px"]} lineHeight="12px" fontFamily="Montserrat">
        {windowWidth < 900 ? (
          <Box display="flex" justifyContent="flex-end" marginRight="1rem">
            <Menu>
              <MenuButton as={IconButton} aria-label='Options' icon={<RxHamburgerMenu />} variant='outline'/>
              <MenuList>
                <MenuItem icon={<RxHamburgerMenu />} command='⌘T'>New Tab</MenuItem>
              </MenuList>
            </Menu>
          </Box>
      ): (
        <Box display="flex" justifyContent="space-between">
          <Link>Explore</Link>
          <Link>Collection</Link>
          <Link>Community</Link>
        </Box>)}
      </Box>
      <Box  display={['none','none','none','flex']} marginRight={['30px','30px','20px']}>
        <BsFillSunFill color="gray.300" />
      </Box>
    </Box>
  );
};

export default Navbar;
