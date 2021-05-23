import React from 'react';
import { StyleSheet, Image, Text,  View, TouchableHighlight} from 'react-native';

export default function ContentItem(props) {
    return (
       <View style={styles.ContentItem}>
           <TouchableHighlight onPress={ ()=> props.setID(props.data.id) }>
                 <Image style={styles.im}  source={{uri:props.data.img}} />
           </TouchableHighlight>
          <Text>{props.data.name}</Text>
    </View>
    );
  }


  const styles = StyleSheet.create({
    ContentItem: {
          
         justifyContent:'center',
         alignItems:'center'
    },
    im: {
        width: 300,
        height: 300,
     }
  });

  
  