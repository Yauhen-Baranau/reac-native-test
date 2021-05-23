
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export const Header = (props) => {

  const [interedText, setText] = useState(null);
  
    return(
        <View style={styles.header}>
          {
             (props.selectedScreenID) ?
             <View style={styles.header}>
                <Ionicons.Button name="ios-arrow-back" size={30} color="white" onPress={()=>props.clearId()}  />
                <Text style={styles.txt}>{props.selectedScreenID.name}</Text>
              </View> 
              :
              <View style={styles.header}>
                  <TextInput style={styles.inp} onChangeText={ text => setText(text) } />
                  <Ionicons.Button  name="ios-search-circle" size={30} color="white" onPress={ ()=> props.search(interedText)}  />
              </View>
          }
        </View>
  )
}


const styles = StyleSheet.create({
 
  header: {
    marginTop:30,
    flex:1,
    flexDirection:'row',
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center'
  },
  inp: {
      width: 250,
      backgroundColor:'white',
      borderBottomRightRadius:20,
      borderTopRightRadius:20,
      borderBottomLeftRadius: 20,
      borderTopLeftRadius: 20,
  },
  txt: {
    color:'white',
    fontSize: 24
  }
  
});


