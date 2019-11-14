import React from 'react';
import { storiesOf } from '@storybook/react-native';

// import

storiesOf("ContactUs", module)
    .add("ThanksContact", ()=>{
        return <ThanksContact />
    })
    .add("ContactUs Page", ()=>{
        return <ContactUs />
    });