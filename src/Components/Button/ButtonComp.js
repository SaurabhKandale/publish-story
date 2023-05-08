import { Button, VStack } from '@chakra-ui/react';
import React, { Children } from 'react';
// import './button.css'

const ButtonComp=(props)=>{

    const {variant='primary' ,children, ... rest}=props;

    return(
        <VStack>
            <Button className={`button `} variant={variant} {...rest}>
                {children}
            </Button>
        </VStack>
    )
}

export default ButtonComp;