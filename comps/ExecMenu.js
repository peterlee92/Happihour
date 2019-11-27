import React, { useState,useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Alert, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function ExecMenu(){

    const [foodMenu, SetFoodMenu] = useState([]);
    const [drinkMenu, SetDrinkMenu] = useState([]);

    const [drinkItem, setDrinkItem] = useState();
    const[drinkPrice, setDrinkPrice] = useState();

    const [foodItem, setFoodItem] = useState();
    const [foodPrice, setFoodPrice] = useState();

    var addDrinkItem = () =>{
        fetch ('http://192.168.0.12/Happihour/exec/addDrink.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: drinkItem,
                price: drinkPrice
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            Alert.alert(responseJson);
        }).catch((error)=>{
            console.error(error);
        })
    };

    var addFoodItem = () =>{
        fetch ('http://192.168.0.12/Happihour/exec/addFood.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: foodItem,
                price: foodPrice
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            Alert.alert(responseJson);
        }).catch((error)=>{
            console.error(error);
        })
    };

    var GetMenu = async()=>{
        let drinkItems = await fetch('http://192.168.0.12/Happihour/exec/execDrinks.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                // rest_name:"Corduroy"
                rest_id: 2
            })
        })

        let drinkData = await drinkItems.json();
        SetDrinkMenu(drinkData);

        let foodItems = await fetch('http://192.168.0.12/Happihour/exec/execFood.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                rest_id:2
            })
        })
        let foodData = await foodItems.json();
        SetFoodMenu(foodData);
    }

    useEffect(()=>{
        GetMenu();
    },[]);

    var delDrinkItem = () =>{
        fetch ('http://192.168.0.12/Happihour/exec/delDrink.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: drinkItem
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            Alert.alert(responseJson);
        }).catch((error)=>{
            console.error(error);
        })
    };

  // Click Edit to display delete button    
    const [del, showDel] = useState(false);
    var delBtn = null;
    var editBtn = "EDIT";
    if(del == true){
        delBtn = (
            <TouchableOpacity
            onPress={()=>delDrinkItem()}
            >
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
        <ScrollView>
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
                                    placeholder="Add Drink Item"
                                    onChangeText = {(text)=>{setDrinkItem(text)}}
                                    />
                                    
                                    
                                <TextInput
                                    style={[styles.input,{width:60}]}
                                    placeholder="0.00"
                                    onChangeText = {(text)=>{setDrinkPrice(text)}}/>
                                <TouchableOpacity
                                    style={btnStyles.addItem}
                                    onPress={()=>{addDrinkItem()}}
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
        
        {/* START FOOD ITEM */}
        
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={[styles.heading6,{flex:2,color:"#FFD96F"}]}>FOOD</Text>
                </View>
        {/* Add Item */}
        <View style={[{flexDirection:"row",alignItems:"center", justifyContent:"center",flex:1}]}>
                                <TextInput
                                    style={[styles.input,{width:150}]}
                                    placeholder="Add Food Item"
                                    onChangeText = {(text)=>{setFoodItem(text)}}
                                    />
                                    
                                <TextInput
                                    style={[styles.input,{width:60}]}
                                    placeholder="0.00"
                                    onChangeText = {(text)=>{setFoodPrice(text)}}
                                    />
                                <TouchableOpacity
                                    style={btnStyles.addItem}
                                    onPress={()=>{addFoodItem()}}
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
                {/* <View
            style={btnStyles.btnCont}
            >
                <TouchableOpacity
                    style={btnStyles.solidBtn}
                    onPress={()=>{}}
                >
                    <Text style={btnStyles.nextText}>SAVE</Text>
                </TouchableOpacity>
            </View>                */}
            </View> 

        </ScrollView>
           
        </KeyboardAvoidingView>
    )
}

export default ExecMenu;
