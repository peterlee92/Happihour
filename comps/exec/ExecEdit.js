import React, {useState} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';

import styles from '../../styles/CompStyles/ExecCompStyles';
import btnStyles from '../../styles/CompStyles/BtnStyles';

function ExecEdit(name,address,contact,url,location){
    const [cname, setCname] = useState();
    const [caddress, setAddress] = useState();
    const [ccontact, setContact] = useState();
    const [cweb, setWeb] = useState();
    const [cneigh, setNeigh] = useState();

    return(
        <KeyboardAvoidingView
                style={/**styles.wrapcontainer*/{flex:1,marginBottom:30}}
                behavior="padding"
                enabled
                >
                    <View
                        style={[styles.container,{}]}
                        >
                            <Text style={[styles.heading4,{marginTop:50,marginBottom:20}]}>EXECUTIVE MODE</Text>
                            <Text style={[styles.subtitle,{marginBottom:-50,marginLeft:70,marginRight:50}]}>
                                UPDATE YOUR BAR OR RESTAURANT INFORMATION BELOW
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
                                        Actions.execInfo()
                                    }}
                                >
                                    <Text style={btnStyles.nextText}>NEXT</Text>
                                </TouchableOpacity>                        
                                            
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
                </KeyboardAvoidingView>
    )
}

export default ExecEdit;