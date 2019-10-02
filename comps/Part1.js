import React, {useState} from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity, Picker, TextInput} from 'react-native';
import Pororo from './Pororo';

const Part1 = () => {
    
    const [statement, SetStatement] = useState(1);
    const [colourState, SetColourState] = useState('Red');
    const [username, SetUserName] = useState('');

    var comp = null;        

    if(statement <= 1){
        comp = (
            <View>
                <Text style={{fontSize:30,fontWeight:'bold'}}>Yo, what's your name?</Text>
                <TextInput 
                    style={{height:40,borderColor:'gray',borderWidth:1}}
                    onChangeText={(text) => SetUserName(text)}
                    value={username}
                />
            </View>
        );
    }

    if(statement === 2){
        comp = (
            <Text style={{fontSize:30,fontWeight:'bold'}}>Hi, {username} How is it going?</Text>
        );
    }

    if(statement === 3){
        comp = (
                <View>
                    <Text style={{fontSize:30,fontWeight:'bold'}}>What is your favourite color?</Text>
                    <Picker
                        selectedValue={colourState}
                        style={{height:50,width:150}}
                        onValueChange={(itemValue, itemIndex)=>SetColourState(itemValue)}
                    >
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="Blue" value="Blue" />
                        <Picker.Item label="Green" value="Green" />
                        <Picker.Item label="Black" value="Black" />
                        <Picker.Item label="White" value="White" />
                    </Picker>
                </View>
        );
    }

    if(statement === 4){
        comp = (
            <View>
                <Text style={{fontSize:30,fontWeight:'bold'}}>Cool, i like {colourState} too. By the way let me introduce my friend.</Text>
            </View>
                
        );
    }

    if(statement === 5){
        comp = (
            <View>
                <Text style={{fontSize:30,fontWeight:'bold'}}>Say Hi, this is Pororo!</Text>
                <Pororo />
            </View>
                
        );
    }

    return(
        <View>
            {comp}
            <View style={{flexDirection:"row"}}>
                <View style={{backgroundColor:'pink', marginRight:10}}>
                    <TouchableHighlight 
                    style={{alignItems:'center'}}
                    onPress={()=>{
                        if(statement>1){
                            SetStatement(statement-1)
                        }
                    }}
                    >
                        <Text>Previous</Text>
                    </TouchableHighlight>    
                </View>
                <View style={{backgroundColor:'pink'}}>
                    <TouchableOpacity
                    style={{alignItems:'center'}}
                    onPress={()=>{
                        if(statement<5){
                            SetStatement(statement+1)
                        } 
                    }}>
                        <Text>Next</Text>
                    </TouchableOpacity> 
                </View>
            </View>
            
        </View>
    );

    
}

export default Part1;
