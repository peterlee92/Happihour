import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Psa01 from '../comps/Psa01';
import Psa02 from '../comps/Psa02';
import Psa03 from '../comps/Psa03';
import Psa04 from '../comps/Psa04';
import Psa05 from '../comps/Psa05';
import Psa06 from '../comps/Psa06';
import Psa07 from '../comps/Psa07';


storiesOf("PSA Pages", module)
    .add("Psa01", ()=>{
        return <Psa01 />
    })
    .add("Psa02", ()=>{
        return <Psa02 />
    })
    .add("Psa03", ()=>{
        return <Psa03 />
    })
    .add("Psa04", ()=>{
        return <Psa04 />
    })
    .add("Psa05", ()=>{
        return <Psa05 />
    })
    .add("Psa06", ()=>{
        return <Psa06 />
    })
    .add("Psa07", ()=>{
        return <Psa07 />
    });
   
    