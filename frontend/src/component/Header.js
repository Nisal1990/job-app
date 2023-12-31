import React from 'react'
import { Box, styled } from '@mui/material';
import headerImage from '../images/jobbg.jpg';
const Header = () => {
    const StyledHeader = styled(Box)(({theme}) => (
        {
            display: "flex",
            justifyContent: 'center',
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: theme.palette.secondary.main
        }
    ));
  return (
   <>
    <StyledHeader>

    </StyledHeader>
   </>
  )
}

export default Header