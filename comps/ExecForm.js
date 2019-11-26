import React, { useState, useEffect } from 'react';
import {View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';
import ExecEdit from './exec/ExecEdit';


function ExecForm(name,address,contact,url,location){
    var phColor = "white";
    var selectColor = "red";

    const [showExecEdit,setShowExecEdit] = useState(false);

   const [restInfo, setRestInfo] = useState([]);

   var GetInfo = async()=>{
    //    let infoResponse = await fetch('http://karencumlat.ca/Happihour/execInfo.php',{
        let infoResponse = await fetch('http:/192.168.0.12/Happihour/exec/execInfo.php',{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            rest_name:'Corduroy'
            //rest_name:restaurant_name
        })
       })
       let restData =  await infoResponse.json();
       setRestInfo(restData);
       console.log('work')
   }

   useEffect(()=>{
       GetInfo();
   },[]);


    return(
        <KeyboardAvoidingView
        style={/**styles.wrapcontainer*/{flex:1,marginBottom:30}}
        behavior="padding"
        enabled
        >
            <ScrollView>
            <View
                style={[styles.container,{}]}
                >
                    <Text style={[styles.heading4,{marginTop:50,marginBottom:20}]}>EXECUTIVE MODE</Text>
                    <Text style={[styles.subtitle,{marginBottom:-50,marginLeft:70,marginRight:50}]}>
                        ENTER YOUR BAR OR RESTAURANT INFORMATION BELOW
                    </Text>
                    {
                        restInfo.map((obj,i)=>{
                            return(
                                <View style={styles.infoForm}>
                        <View style={[styles.inputCont]}>
                            <Text style={styles.label}>Company Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Company Name"
                                placeholderTextColor={phColor}  
                                value={obj.name}      
                                selectionColor="#FFD96F"
                                blurOnSubmit={false}                        
                                returnKeyType={"next"}                    
                                onSubmitEditing = {()=> refAddress.focus()}
                            />                            
                        </View>
                        <View style={[styles.inputCont]}>
                            <Text style={styles.label}>Company Address</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Address"
                                placeholderTextColor={phColor}                    
                                value={obj.address} 
                                blurOnSubmit={false}
                                returnKeyType={"next"} 
                                ref={(i)=>{refAddress = i}}
                                onSubmitEditing = {()=> refContact.focus()}
                            />                            
                        </View>
                        <View style={[styles.inputCont]}>
                            <Text style={styles.label}>Contact Number</Text>                            
                            <TextInput
                                style={styles.input}
                                placeholder="Contact Number"
                                placeholderTextColor={phColor}                    
                                value={obj.contact}
                                blurOnSubmit={false}
                                returnKeyType={"next"} 
                                ref={(i)=>{refContact = i}}
                                onSubmitEditing = {()=> refWeb.focus()}                        
                            />                            
                        </View>
                        <View style={[styles.inputCont]}>
                            <Text style={styles.label}>Website</Text>                                                        
                            <TextInput
                                style={styles.input}
                                placeholder="Website URL"
                                placeholderTextColor={phColor}
                                value={obj.url}
                                blurOnSubmit={false}
                                returnKeyType={"next"} 
                                ref={(i)=>{refWeb = i}}
                                onSubmitEditing = {()=> refArea.focus()}
                            />                            
                        </View>
                        <View style={[styles.inputCont]}>
                            <Text style={styles.label}>Neighborhood</Text>  
                            <TextInput
                                style={styles.input}
                                placeholder="Location: (ex:Kitsilano)"
                                placeholderTextColor={phColor} 
                                value={obj.location} 
                                blurOnSubmit={false}
                                returnKeyType={"done"} 
                                ref={(i)=>{refArea = i}}
                                // onSubmitEditing = {()=>{CheckUserInfo()}}                  
                            />                                  
                        </View>
                        <TouchableOpacity
                            style={[btnStyles.solidBtn,{marginTop:20}]}
                            onPress={()=>{
                               setShowExecEdit(!showExecEdit);
                            }}
                        >
                            <Text style={btnStyles.nextText}>EDIT</Text>
                        </TouchableOpacity>                         
                        <TouchableOpacity
                            style={[btnStyles.solidBtn,{marginTop:20}]}
                            onPress={()=>{
                                Actions.execInfo()
                            }}
                        >
                            <Text style={btnStyles.nextText}>NEXT</Text>
                        </TouchableOpacity>   
                        {
                        (showExecEdit) ? <ExecEdit
                        // id={id}
                        name={name}
                        address={address}
                        contact={contact}
                        url={url}
                        location={location}

                        /> : null
                        }                     
                                      
                    </View>

                            )
                        })
                    }

                    {/* <View
                    style={[btnStyles.btnCont,{flex:1}]}
                    >
                        <TouchableOpacity
                            style={btnStyles.solidBtn}
                            onPress={()=>{
                                Actions.execInfo()
                            }}
                        >
                            <Text style={btnStyles.nextText}>NEXT</Text>
                        </TouchableOpacity>
                    </View> */}
                </View> 
            </ScrollView>           
        </KeyboardAvoidingView>
            
    )
}

export default ExecForm;
