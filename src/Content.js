
import React from 'react';
import { Image, StyleSheet, Text,  View, ScrollView, SafeAreaView , StatusBar} from 'react-native';

import ContentItem  from './ContentItem'
import ItemDemo from './ItemDemo'

export const Content = (props) => {
  let itemsCode = (props.data)? props.data.map(v=>{
      return( <ContentItem setID={props.setID} key={v.id} data={ {name:v.name, id:v.id, img:v.img, summary: v.summary} }/>)
     }) : null

     let itemDemodata = props.selectedScreenID && props.selectedScreenID 


         
return(
   <View style={styles.content} >
       {
         (props.selectedScreenID) ?
            <ItemDemo data={itemDemodata} />
            :  
         <ScrollView style={styles.scrollView}>
           {itemsCode}
         </ScrollView>
         } 
    </View>
  )
}

const styles = StyleSheet.create({
 im:{
    width: 300,
    height: 300,
  
 },
  content: {
    
    flex: 3,
    flexDirection: 'row',
    flexWrap:'wrap',
   
 
},

scrollView: {
   flex: 2,
   height:700
}
});


