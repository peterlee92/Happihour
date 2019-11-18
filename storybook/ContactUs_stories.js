import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ThanksContact from '../comps/ThanksContact-popUp';
import ContactUs from '../screens/ContactUs';

storiesOf("ContactUs Page", module)
    .add("ThanksContact", ()=>{
        return <ThanksContact />
    })
    .add("ContactUs Page", ()=>{
        return <ContactUs />
    });