import React, { useState,useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function ExecMenu(){

    const [foodMenu, SetFoodMenu] = useState([]);
    const [drinkMenu, SetDrinkMenu] = useState([]);

    var GetMenu = async()=>{
        let drinkItems = await fetch('http://karencumlat.ca/Happihour/execDrinks.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                rest_name:"Colony"
            })
        })

        let drinkData = await drinkItems.json();
        SetDrinkMenu(drinkData);

        let foodItems = await fetch('http://karencumlat.ca/Happihour/execFood.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                rest_name:1
            })
        })
        let foodData = await foodItems.json();
        SetFoodMenu(foodData);
    }

    useEffect(()=>{
        GetMenu();
    },[]);

  // Click Edit to display delete button    
    const [del, showDel] = useState(false);
    var delBtn = null;
    var editBtn = "EDIT";
    if(del == true){
        delBtn = (
            <TouchableOpacity>
            <FontAwesomeIcon icon='minus' transform="shrink-5" size={30} color="#FFFFFF" style={btnStyles.removeBtn}/>
        </TouchableOpacity>
        )
        editBtn = "DONE";
    }else{
        delBtn = null;
    }

    return(
        <KeyboardAvoidingView
        style={/**styles.wrapcontainer*/{flex:1}}
        behavior="padding"
        enabled
        >
                <View style={styles.container}>
                <Text style={styles.overline}>
                        SUBMIT YOUR HAPP HOUR MENU</Text>                
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={[styles.heading6,{flex:2, color:"#FFD96F"}]}>DRINKS</Text>
                    <TouchableOpacity
                        onPress={()=>(
                            showDel(!del)
                        )}
                    >
                    <Text style={styles.overline}>{editBtn}</Text>
                </TouchableOpacity>
                </View>
        {/* Add Item */}
                    <View style={[{flexDirection:"row",alignItems:"center", justifyContent:"center",flex:1}]}>
                                <TextInput
                                    style={[styles.input,{width:150}]}
                                    placeholder="Menu Item"/>
                                    
                                <TextInput
                                    style={[styles.input,{width:60}]}
                                    placeholder="0.00"/>
                                <TouchableOpacity
                                    style={btnStyles.addItem}
                                    onPress={()=>{}}
                                >
                                    <FontAwesomeIcon icon='plus' transform="shrink-5" size={20} color="#FFFFFF"/>
                                    {/* <Text style={btnStyles.addText}>Add</Text> */}
                                </TouchableOpacity>                            
                    </View>
                    {
                        drinkMenu.map((obj,i)=>{
                            return(
                                <View style={[{flexDirection:"row",alignItems:"center", justifyContent:"center",flex:1}]}>
                                    <Text style={{color:"white", flex:1.5}}>{obj.name}</Text>
                                    <Text style={{color:"white", flex:.5}}>{obj.price}</Text>
                                {/* <TextInput
                                    style={[styles.input,{width:200}]}
                                    placeholder="Menu Item"
                                    value={obj.name}/>
                                    
                                <TextInput
                                    style={[styles.input,{width:70}]}
                                    placeholder="0.00"
                                    value={obj.price}/> */}
                                {delBtn}                      
                            </View>
                            )
                        })
                    }
        
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={[styles.heading6,{flex:2,color:"#FFD96F"}]}>FOOD</Text>
                </View>
        {/* Add Item */}
        <View style={[{flexDirection:"row",alignItems:"center", justifyContent:"center",flex:1}]}>
                                <TextInput
                                    style={[styles.input,{width:150}]}
                                    placeholder="Menu Item"/>
                                    
                                <TextInput
                                    style={[styles.input,{width:60}]}
                                    placeholder="0.00"/>
                                <TouchableOpacity
                                    style={btnStyles.addItem}
                                    onPress={()=>{}}
                                >
                                    <FontAwesomeIcon icon='plus' transform="shrink-5" size={20} color="#FFFFFF"/>
                                    {/* <Text style={btnStyles.addText}>Add</Text> */}
                                </TouchableOpacity>                            
                    </View>
        {
                        foodMenu.map((obj,i)=>{
                            return(
                                <View style={[{flexDirection:"row",alignItems:"center", justifyContent:"center",flex:1}]}>
                                    <Text style={{color:"white", flex:1.5}}>{obj.name}</Text>
                                    <Text style={{color:"white", flex:.5}}>{obj.price}</Text>
                                {delBtn}                      
                            </View>
                            )
                        })
                    }

        {/* Save Button */}
                <View
            style={btnStyles.btnCont}
            >
                <TouchableOpacity
                    style={btnStyles.solidBtn}
                    onPress={()=>{}}
                >
                    <Text style={btnStyles.nextText}>SAVE</Text>
                </TouchableOpacity>
            </View>               
            </View>            
        </KeyboardAvoidingView>
    )
}

export default ExecMenu;
