import React from 'react';
import {View, TextInput, ImageBackground, Button} from 'react-native';
import styles from '../styles/LoginFormStyles';

function LoginForm() {
    return(
        <ImageBackground 
            style={styles.background}
            source={require('../imgs/background1.jpg')}
        >
            <TextInput
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <Button 
                title='Login'
                style={styles.login}
                onPress={()=>{}}
            />

        </ImageBackground>
    )
}

export default LoginForm;