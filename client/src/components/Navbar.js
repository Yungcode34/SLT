import React from 'react';
import { Box, Text } from 'gestalt'
import { NavLink } from 'react-router-dom';

//navbar being created with multiple links

const Navbar = () => (
    <Box
    height={70}
    color="darkGray"
    padding="1"
    >
        {/*sign in link*/}

        <NavLink to="/signin">
            <Text size="xl" color="white">
                Sign in
            </Text>
        </NavLink>
    </Box>
    
)
export default Navbar;