import { Input, VStack } from "@chakra-ui/react";
import React from "react";
// import './Input.css',

const InputComp = (props) => {

    const { variant = 'medium', placeholder = 'Medium Size', ...rest } = props;

    return (
        <VStack>
            <Input className={`input`}
                variant={variant}
                placeholder={placeholder}
                {...rest} />
        </VStack>
    )
}

export default InputComp;