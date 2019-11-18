import React from 'react';
import { storiesOf } from '@storybook/react-native';

import AccountChanges from '../comps/AccountChanges-popUp';
import AddContact from '../comps/AddContact-popUp';
import EditAccount from '../screens/EditAccount';

storiesOf("EditAccount Page", module)
    .add("AccountChages", ()=>{
        return <AccountChanges />
    })
    .add("AddContact", ()=>{
        return <AddContact />
    })
    .add("EditAccount Page", ()=>{
        return <EditAccount />
    })