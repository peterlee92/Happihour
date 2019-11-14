import React from 'react';
import { storiesOf } from '@storybook/react-native';

import DetailHeader from '../comps/DetailHeader';
import DetailContent from '../comps/DetailContent';
import Detail from '../screens/Detail';

storiesOf("Detail", module)
    .add("DetailHeader", ()=>{
        return <DetailHeader />
    })
    .add("DetailContent", ()=>{
        return <DetailContent />
    })
    .add("Deatil", ()=>{
        return <Detail />
    })