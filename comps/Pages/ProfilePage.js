import React from 'react';
import {View, Text, Button, Switch, Image} from 'react-native';
import MenuBar from '../MenuBar';

function ProfilePage(username){
    return(
        <View>
            <Image />
            <Text>{username}</Text>

            <Button>Edit Profile</Button>
            <Button>Edit Emergency Contact</Button>

            <View>
                <Text>Notifications</Text>
                <Switch />
            </View>

            <View>
                <Text>Location Tracking</Text>
                <Switch />
            </View>

            <Button>Log Out</Button>

            <MenuBar />
        </View>
    )
}

export default ProfilePage;