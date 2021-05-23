import React from 'react';
import { StyleSheet, Image, Text,  View} from 'react-native';

export default function ItemDemo(props) {
    return (
        <View style={styles.ItemDemo}>
            <Image style={styles.im} source={{uri:props.data.img}}/>
            <Text style={styles.h}>{props.data.name}</Text>
            <Text>
            {
            props.data.summary &&   
            props.data.summary.split('<p>').join('').split('</p>').join('')
            }
            </Text>
        </View>
    );
  }

const styles = StyleSheet.create({
    im: {
        width: 300,
        height: 300,
     },
     ItemDemo:{
        padding: 10,
         justifyContent:'center',
         alignItems:'center'
     },
     h: {
         fontSize:24
     }
  });