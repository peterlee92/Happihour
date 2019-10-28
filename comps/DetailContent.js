import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/CompStyles/DetailContentStyles';

function DetailContent(){
    return(
        <View style={{flex:5}}>
            <View style={styles.menuContainer}>
                <Text style={styles.menu}>DRINKS</Text>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
            </View>
            <View style={styles.menuContainer}>
                <Text style={styles.menu}>FOOD</Text>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text>     
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>1oz WELL HIGHBALL</Text>
                    <Text style={styles.price}>$5</Text> 
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttons}>
                    <Text>VISIT WEBSITE</Text>
                </View>
                <View style={styles.buttons}>
                    <Text>778-123-4567</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailContent;