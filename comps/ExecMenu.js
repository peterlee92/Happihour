import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from '../styles/CompStyles/ExecCompStyles';
import btnStyles from '../styles/CompStyles/BtnStyles';

function ExecMenu(){
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

    const drinkItems = [];
    var key = key + 1;

    const addDrink = ()=>{
        drinkItems.push(
            <View style={[{flexDirection:"row",alignItems:"center"}]}
            key = {key}>
            <TextInput
                style={[styles.input,{width:200}]}
                placeholder="Menu Item"/>
            <TextInput
                style={[styles.input,{width:70}]}
                placeholder="0.00"/>
             {delBtn}                      
        </View>
        )
        return drinkItems;
    }

    return(
        
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

            <View style={[{flexDirection:"row",alignItems:"center"}]}>
                <TextInput
                    style={[styles.input,{width:200}]}
                    placeholder="Menu Item"/>
                <TextInput
                    style={[styles.input,{width:70}]}
                    placeholder="0.00"/>
                 {delBtn}                      
            </View>
            {drinkItems}
{/* Add Item Input Row */}
        <TouchableOpacity
        onPress ={()=>(
            addDrink()
        )}>
            <FontAwesomeIcon icon='plus' transform="shrink-5" size={50} color="#FFFFFF" style={btnStyles.addBtn}/>
        </TouchableOpacity> 
 
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={[styles.heading6,{flex:2,color:"#FFD96F"}]}>FOOD</Text>
            {/* <TouchableOpacity
                onPress={()=>(
                    showDel(!del)
                )}            
            >
            <Text style={ styles.overline}>{editBtn}</Text>
        </TouchableOpacity> */}
        </View>

{/* Add Item */}

<View style={[{flexDirection:"row",alignItems:"center"}]}>
                <TextInput
                    style={[styles.input,{width:200}]}
                    placeholder="Menu Item"/>
                <TextInput
                    style={[styles.input,{width:70}]}
                    placeholder="0.00"/>
                 {delBtn}                    
                                      
            </View>

        <TouchableOpacity>
            <FontAwesomeIcon icon='plus' transform="shrink-5" size={50} color="#FFFFFF" style={btnStyles.addBtn}/>
        </TouchableOpacity> 

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
    )
}

export default ExecMenu;
