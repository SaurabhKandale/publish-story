import React from "react";
import ButtonComp from "./ButtonComp";

export default {
    title:'Button',
    component:ButtonComp,
    argTypes:{
        onClick: {action:`clicked`},
    },
}

const Template=(args)=><ButtonComp {...args} />

export const Primary=Template.bind({});
Primary.args={
    variant:'primary',
    children:'Primary With Args'
}
export const SecondaryA=Template.bind({});
SecondaryA.args={
    variant:'secondary',
    children:'Secondary With Args',
}
export const Success=Template.bind({});
Success.args={
    variant:'success',
    children:'Success With Args'
}
export const Danger=Template.bind({});
Danger.args={
    variant:'danger',
    children:'Danger With Args'
}