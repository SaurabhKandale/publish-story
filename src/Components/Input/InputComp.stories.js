import React from "react";
import InputComp from "./InputComp";

export default {
    title:'Input',
    component:InputComp,
    tags:['autodocs'],
    argTypes:{
        onChange:{action:'Input Field Changed'},
        onMouseOver:{action:'hovering'}, 
        backgroundColor:{control:'color'}
    },
}

const Template=(args)=><InputComp {...args} />

export const Small=Template.bind({});
Small.args={
    variant:'small',
    placeholder:'Small Button'
}
export const Medium=Template.bind({});
Medium.args={
    variant:'medium',
    placeholder:'Medium Button'
}
export const Large=Template.bind({});
Large.args={
    variant:'large',
    placeholder:'Large Button'
}