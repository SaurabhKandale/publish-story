import React from 'react'
import { Box } from '@chakra-ui/react';

const BorContainer=(props)=>{
    return(
        <Box
        display='block'
        py={'2rem'}
        justifyContent='center'
        alignItems='center'
        border='2px solid black'
        borderRadius='10px'
        >
            {props.children}
        </Box>
    )
}

export default BorContainer;