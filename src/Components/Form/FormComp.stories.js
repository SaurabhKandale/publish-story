import React from 'react';
import { Medium } from '../Input/InputComp.stories';
import { SecondaryA } from '../Button/Button.stories';

export default {
    title: 'Form'
}

export const Comp = () => {
    return (
        <>
            <Medium />
            <SecondaryA variant='secondary' children={'Secondary From Button'} />
        </>
    )
}